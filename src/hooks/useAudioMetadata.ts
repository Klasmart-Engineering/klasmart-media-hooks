import { gql, useQuery } from '@apollo/client'
import { MediaMetadataHookInput, MediaMetadataHookOutput } from './sharedTypes'

export const useAudioMetadata = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
  client,
}: MediaMetadataHookInput): MediaMetadataHookOutput => {
  const { loading, error, data } = useQuery(GET_AUDIO_METADATA, {
    variables: {
      userId: userId,
      roomId: roomId,
      h5pId: h5pId,
      h5pSubId: h5pSubId,
    },
    client: client,
  })
  return { loading, error, mediaMetadata: data?.audioMetadata || [] }
}

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
      description
      mimeType
      createdAt
    }
  }
`
