import React from "react";
import { useDownloadAudio } from "../../hooks";

export const PlayerWithHook = ({
  audioId,
  roomId,
  organizationId,
}: {
  audioId: string;
  roomId: string;
  organizationId: string;
}) => {
  const { loading, error, audioSrc } = useDownloadAudio({
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

export default PlayerWithHook;
