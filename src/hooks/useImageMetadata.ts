import { gql, useQuery } from '@apollo/client'
import {
  MediaMetadataHookInput,
  MediaMetadataHookOutput,
  MediaMetadataItem,
} from './sharedTypes'

export const useImageMetadata = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
  client,
}: MediaMetadataHookInput): MediaMetadataHookOutput => {
  const { loading, error, data } = useQuery(GET_IMAGE_METADATA, {
    variables: {
      userId: userId,
      roomId: roomId,
      h5pId: h5pId,
      h5pSubId: h5pSubId,
    },
    client: client,
  })
  return { loading, error, mediaMetadata: data?.imageMetadata || [] }
}

const GET_IMAGE_METADATA = gql`
  query imageMetadata(
    $userId: String!
    $roomId: String!
    $h5pId: String!
    $h5pSubId: String
  ) {
    imageMetadata(
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
