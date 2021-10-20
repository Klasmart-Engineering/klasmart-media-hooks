import { gql, useQuery } from "@apollo/client";

const GET_AUDIO_METADATA = gql`
  query audioMetadata(
    $userId: String!
    $roomId: String!
    $h5pId: String!
    $h5pSubId: String
  ) {
    audioMetadata(
      userId: $userId
      roomId: $roomId
      h5pId: $h5pId
      h5pSubId: $h5pSubId
    ) {
      id
      userId
      roomId
      h5pId
      h5pSubId
      creationDate
    }
  }
`;

interface AudioMetadataHookInput {
  userId: string;
  roomId: string;
  h5pId: string;
  h5pSubId?: string;
}

interface AudioMetadataItem {
  id: string;
  userId: string;
  roomId: string;
  h5pId: string;
  h5pSubId?: string;
  creationDate: string | any;
}

interface AudioMetadataHookOutput {
  loading: boolean;
  error?: any;
  audioMetadata?: AudioMetadataItem[];
}

export const useAudioMetadata = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
}: AudioMetadataHookInput): AudioMetadataHookOutput => {
  const { loading, error, data } = useQuery(GET_AUDIO_METADATA, {
    variables: {
      userId: userId,
      roomId: roomId,
      h5pId: h5pId,
      h5pSubId: h5pSubId,
    },
  });
  return { loading, error, audioMetadata: data.audioMetadata || [] };
};

// Usage:
// <AudioMetaDataWithHook userId="" roomId="" h5pId="" h5pSubId="" />
export const AudioMetaDataWithHook = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
}: AudioMetadataHookInput) => {
  const { loading, error, audioMetadata } = useAudioMetadata({
    userId,
    roomId,
    h5pId,
    h5pSubId,
  });
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  if (loading) return <p>Loading ...</p>;
  return <h1>Audio ID: {audioMetadata?.[0]?.id ?? "none"}!</h1>;
};

function AudioMetaData() {
  const { loading, error, data } = useQuery(GET_AUDIO_METADATA, {
    variables: {
      userId: "22b1d72e-eb06-5bb4-b90a-0aff3dd855c6",
      roomId: "roomId",
      h5pId: "6139a4b60d38ab00139ee5ea",
    },
  });
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  if (loading) return <p>Loading ...</p>;
  return <h1>Audio ID: {data?.audioMetadata[0]?.id ?? "none"}!</h1>;
}

export default AudioMetaData;
