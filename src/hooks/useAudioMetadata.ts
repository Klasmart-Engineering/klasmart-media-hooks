import { gql, useQuery } from '@apollo/client'

export interface AudioMetadataHookInput {
  userId: string
  roomId: string
  h5pId: string
  h5pSubId?: string
}

export interface AudioMetadataItem {
  id: string
  userId: string
  roomId?: string
  h5pId: string
  h5pSubId?: string
  description: string
  mimeType: string
  creationDate: string | any
}

export interface AudioMetadataHookOutput {
  loading: boolean
  error?: any
  audioMetadata?: AudioMetadataItem[]
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
  })
  return { loading, error, audioMetadata: data?.audioMetadata || [] }
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
      creationDate
    }
  }
`
