import { gql, useQuery } from '@apollo/client';
import { box } from 'tweetnacl'
import React, { useState, useEffect } from "react";

const GET_GREETING = gql`
# Write your query or mutation here
query {
  launches {
    launches {
      id
    }
  }
}
`;

const AUDIO_METADATA_FOR_USER = gql`
query audioMetadataForUser($userId: String!) {
  audioMetadataForUser(userId: $userId) {
    id
    userId
    roomId
    h5pId
    h5pSubId
    creationDate
  }
}
`

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
  console.log('1')
  const nonce = messageWithNonceAsUint8Array.slice(0, box.nonceLength)
  console.log('2')
  const message = messageWithNonceAsUint8Array.slice(
    box.nonceLength,
    messageWithNonce.length,
  )
  console.log('3')

  const decrypted = box.open.after(message, nonce, secretOrSharedKey)
  console.log('4')

  if (!decrypted) {
    throw new Error('Could not decrypt message')
  }

  return decrypted
}

// function Hello() {
//   const { loading, error, data } = useQuery(GET_GREETING, {
//     variables: { language: 'english' },
//   });
//   if (loading) return <p>Loading ...</p>;
//   return <h1>Hello {data.launches.launches[1].id}!</h1>;
// }
// function Hello() {
//   const { loading, error, data } = useQuery(AUDIO_METADATA_FOR_USER, {
//     variables: { userId: '22b1d72e-eb06-5bb4-b90a-0aff3dd855c6' },
//   });
//   if (error) {
//     return <p>error: {JSON.stringify(error, null, 2)}</p>;
//   }
//   if (loading) return <p>Loading ...</p>;
//   return <h1>Hello {data.audioMetadataForUser[0].id}!</h1>;
// }

// function Hello() {
//   const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
//     variables: { audioId: '54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb', organizationId: 'org1' },
//   });

//   console.log(data)
//   if (error) {
//     return <p>error: {JSON.stringify(error, null, 2)}</p>;
//   }
//   if (loading) return <p>Loading ...</p>;
//   console.log('not loading')
//   const presignedUrl = data.getRequiredDownloadInfo.presignedUrl
//   console.log('presignedUrl', presignedUrl)
//   fetch(presignedUrl, {
//     method: 'GET',
//     credentials: 'include',
//   }).then(response => {
//     //console.log(response)
//     const base64SymmetricKey = data.getRequiredDownloadInfo.base64SymmetricKey
//     const symmetricKey = Buffer.from(base64SymmetricKey, 'base64')
//     response.text().then(x => {
//       //console.log('response.text()', x)
//       const decryptedAudio = decrypt(symmetricKey, x)
//       const audioUrl = URL.createObjectURL(new Blob([decryptedAudio.buffer], {type: "audio/webm"}))
//       const audio = new Audio(audioUrl)
//       audio.play().then(() => console.log('success')).catch(e => console.log(e.message))
//       return <h1>Hello {audioUrl}!</h1>;
//     })
//   })
//   return <p>Loading ...</p>;
// }



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


const Player = (organizationId: string, audioId: string) => {
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


// userId, roomId, h5pId, h5pSubId
const AudioList = () => {
  const { loading, error, data } = useQuery(AUDIO_METADATA_FOR_USER, {
    variables: { userId: '22b1d72e-eb06-5bb4-b90a-0aff3dd855c6' },
  });
  //const [audioId, setAudioId] = useState("");
  // if (loading) return <p>Loading ...</p>;
  // if (error) {
  //   return <p>error: {JSON.stringify(error, null, 2)}</p>;
  // }
  //'54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb'
  // data.audioMetadataForUser.map((item: any) => {
  //   return <button onClick={() => setAudioId(item.id)}>Audio ID: {item.id}</button>;
  // })
  const [blah, toggle] = useState(() => {});
  if (loading || error) {
    return (
      <div>
        <button onClick={() => toggle}>{"Play"}</button>
      </div>
    );
  }
  return (
    <div>
      {(data?.audioMetadataForUser ?? []).map((item: any) => {
        return Player('org1', item.id);
      })}
    </div>
  );
  //return Player('org1', audioId)
}


export default AudioList;
