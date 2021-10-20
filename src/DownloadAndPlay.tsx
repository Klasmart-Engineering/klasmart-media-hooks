import { gql, useQuery } from "@apollo/client";
import { box } from "tweetnacl";
import React, { useState, useEffect } from "react";

// const GET_REQUIRED_DOWNLOAD_INFO__WITH_ROOM_ID = gql`
//   query getRequiredDownloadInfo($audioId: String!, $roomId: String!) {
//     getRequiredDownloadInfo(audioId: $audioId, roomId: $roomId) {
//       base64SymmetricKey
//       presignedUrl
//     }
//   }
// `;

const GET_REQUIRED_DOWNLOAD_INFO = gql`
  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {
    getRequiredDownloadInfo(
      audioId: $audioId
      organizationId: $organizationId
    ) {
      base64SymmetricKey
      presignedUrl
    }
  }
`;

export const decrypt = (
  secretOrSharedKey: Uint8Array,
  messageWithNonce: string
): Uint8Array => {
  const messageWithNonceAsUint8Array = Buffer.from(messageWithNonce, "base64");
  const nonce = messageWithNonceAsUint8Array.slice(0, box.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(
    box.nonceLength,
    messageWithNonce.length
  );

  const decrypted = box.open.after(message, nonce, secretOrSharedKey);

  if (!decrypted) {
    throw new Error("Could not decrypt message");
  }

  return decrypted;
};

const useAudio: (audio: HTMLAudioElement) => [boolean, () => void] = (
  audio: HTMLAudioElement
) => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

interface AudioPlayerHookInput {
  audioId: string;
  roomId?: string;
  organizationId?: string;
}

interface AudioPlayerHookOutput {
  audioSrc?: string;
  htmlAudioElement?: HTMLAudioElement;
  loading?: boolean;
  error?: string;
}

// TODO: replace organization with roomId
const useAudioPlayer = ({
  audioId,
  roomId,
  organizationId,
}: AudioPlayerHookInput): AudioPlayerHookOutput => {
  const [response, setReponse] = useState<AudioPlayerHookOutput>({
    loading: true,
  });

  // TODO: replace query with GET_REQUIRED_DOWNLOAD_INFO__WITH_ROOM_ID that uses roomID
  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { audioId, organizationId },
  });

  useEffect(() => {
    const downloadAudio = async (presignedUrl: string) => {
      try {
        const response = await fetch(presignedUrl, {
          method: "GET",
          credentials: "include",
        });
        console.log("response", response.status);
        const base64SymmetricKey =
          data.getRequiredDownloadInfo.base64SymmetricKey;
        console.log("base64SymmetricKey", base64SymmetricKey);
        const symmetricKey = Buffer.from(base64SymmetricKey, "base64");
        console.log("symmetricKey");
        const base64EncryptedAudio = await response.text();
        console.log("base64EncryptedAudio");
        const decryptedAudio = decrypt(symmetricKey, base64EncryptedAudio);
        console.log("decryptedAudio");
        const blob = new Blob([decryptedAudio], { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(blob);
        console.log("audioUrl", audioUrl);
        setReponse({ loading: false, audioSrc: audioUrl });
      } catch (e) {
        console.error(e);
        setReponse({ loading: false, error: e as string });
      }
    };

    if (
      loading === false &&
      error === undefined &&
      data?.getRequiredDownloadInfo?.presignedUrl !== undefined
    ) {
      downloadAudio(data.getRequiredDownloadInfo.presignedUrl);
    }
  }, [data, loading, error]);

  if (loading) {
    return { loading: true };
  }
  if (error) {
    return { loading: false, error: error.message };
  }

  return response;
};

const Player = ({
  audioId,
  organizationId,
}: {
  audioId: string;
  organizationId: string;
}) => {
  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { audioId, organizationId },
  });
  const [audio, setAudio] = useState(new Audio());
  const [audioSrc, setAudioSrc] = useState<string>();
  const [playing, toggle] = useAudio(audio);
  useEffect(() => {
    if (loading) return;
    if (error) {
      console.log(error);
      return;
    }
    const presignedUrl = data.getRequiredDownloadInfo.presignedUrl;
    const downloadAudio = async () => {
      try {
        const response = await fetch(presignedUrl, {
          method: "GET",
          credentials: "include",
        });
        console.log("response", response.status);
        const base64SymmetricKey =
          data.getRequiredDownloadInfo.base64SymmetricKey;
        console.log("base64SymmetricKey", base64SymmetricKey);
        const symmetricKey = Buffer.from(base64SymmetricKey, "base64");
        console.log("symmetricKey");
        const base64EncryptedAudio = await response.text();
        console.log("base64EncryptedAudio");
        const decryptedAudio = decrypt(symmetricKey, base64EncryptedAudio);
        console.log("decryptedAudio");
        const blob = new Blob([decryptedAudio], { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(blob);
        console.log("audioUrl", audioUrl);
        setAudioSrc(audioUrl);
        setAudio(new Audio(audioUrl));
      } catch (e) {
        console.error(e);
      }
    };
    downloadAudio();
  }, [loading, error, data]);

  if (loading) return <p>Loading ...</p>;
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  return (
    <div>
      <audio src={audioSrc} controls controlsList="nodownload" />
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export const PlayerWithHook = ({
  audioId,
  roomId,
  organizationId,
}: {
  audioId: string;
  roomId: string;
  organizationId: string;
}) => {
  const { loading, error, audioSrc } = useAudioPlayer({
    audioId,
    roomId,
    organizationId,
  });

  if (loading) return <p>Loading ...</p>;
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  return (
    <div>
      <audio src={audioSrc} controls controlsList="nodownload" />
    </div>
  );
};

export default Player;
