import React from "react";
import {
  AudioPlayerHookInput,
  useDownloadAudio,
} from "../../hooks/useDownloadAudio";

export const AudioPlayer = ({ audioId, mimeType }: AudioPlayerHookInput) => {
  const { loading, error, audioSrc } = useDownloadAudio({
    audioId,
    mimeType,
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

export default AudioPlayer;
