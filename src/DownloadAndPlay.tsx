import { gql, useQuery } from '@apollo/client';
import { box } from 'tweetnacl'
import React, { useState, useEffect } from "react";

const GET_REQUIRED_DOWNLOAD_INFO = gql`
query getRequiredDownloadInfo(
    $audioId: String!
    $organizationId: String!,) {
  getRequiredDownloadInfo(
    audioId: $audioId,
    organizationId: $organizationId,
  ) {
    base64SymmetricKey
    presignedUrl
  }
}
`

export const decrypt = (
  secretOrSharedKey: Uint8Array,
  messageWithNonce: string,
): Uint8Array => {
  const messageWithNonceAsUint8Array = Buffer.from(messageWithNonce, 'base64')
  const nonce = messageWithNonceAsUint8Array.slice(0, box.nonceLength)
  const message = messageWithNonceAsUint8Array.slice(
    box.nonceLength,
    messageWithNonce.length,
  )

  const decrypted = box.open.after(message, nonce, secretOrSharedKey)

  if (!decrypted) {
    throw new Error('Could not decrypt message')
  }

  return decrypted
}

const useAudio: (audio: HTMLAudioElement) => [boolean, () => void] = (audio: HTMLAudioElement) => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [audio, playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return [playing, toggle];
};


const Player = ({ audioId, organizationId }: { audioId: string, organizationId: string }) => {
  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { audioId, organizationId },
  });
  const [audio, setAudio] = useState(new Audio());
  const [playing, toggle] = useAudio(audio);
  useEffect(() => {
    if (loading) return;
    if (error) {
      console.log(error)
      return
    }
    const presignedUrl = data.getRequiredDownloadInfo.presignedUrl
    const downloadAudio = async () => {
      const response = await fetch(presignedUrl, {
        method: 'GET',
        credentials: 'include',
      })
      console.log("response", response.status)
      const base64SymmetricKey = data.getRequiredDownloadInfo.base64SymmetricKey
      console.log("base64SymmetricKey", base64SymmetricKey)
      const symmetricKey = Buffer.from(base64SymmetricKey, 'base64')
      console.log("symmetricKey")
      const base64EncryptedAudio = await response.text()
      console.log("base64EncryptedAudio")
      const decryptedAudio = decrypt(symmetricKey, base64EncryptedAudio)
      console.log("decryptedAudio")
      const audioUrl = URL.createObjectURL(new Blob([decryptedAudio], { type: "audio/webm" }))
      console.log("audioUrl", audioUrl)
      setAudio(new Audio(audioUrl))
    }
    downloadAudio()
    },
    [loading, error, data]
  );
  
  if (loading) return <p>Loading ...</p>;
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};


export default Player;
