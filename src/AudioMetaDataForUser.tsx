import { gql, useQuery } from '@apollo/client';

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

function AudioMetaDataForUser() {
  const { loading, error, data } = useQuery(AUDIO_METADATA_FOR_USER, {
    variables: { userId: '22b1d72e-eb06-5bb4-b90a-0aff3dd855c6' },
  });
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>;
  }
  if (loading) return <p>Loading ...</p>;
  return <h1>Audio ID: {data?.audioMetadataForUser[0]?.id ?? "none"}!</h1>;
}

export default AudioMetaDataForUser;
