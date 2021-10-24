import { gql, useQuery } from "@apollo/client";
import { box } from "tweetnacl";
import { useState, useEffect } from "react";

export const useDownloadAudio = ({
  audioId,
}: AudioPlayerHookInput): AudioPlayerHookOutput => {
  const [response, setReponse] = useState<AudioPlayerHookOutput>({
    loading: true,
  });

  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { audioId },
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

export interface AudioPlayerHookInput {
  audioId: string;
}

interface AudioPlayerHookOutput {
  audioSrc?: string;
  htmlAudioElement?: HTMLAudioElement;
  loading?: boolean;
  error?: string;
}

const GET_REQUIRED_DOWNLOAD_INFO = gql`
  query getRequiredDownloadInfo($audioId: String!) {
    getRequiredDownloadInfo(
      audioId: $audioId
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
