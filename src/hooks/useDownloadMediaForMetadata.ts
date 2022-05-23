import { ApolloClient, gql, useQuery } from '@apollo/client'
import { box } from 'tweetnacl'
import { useState, useEffect } from 'react'

export interface DownloadMediaForMetadataHookInput {
  userId: string
  roomId: string
  h5pId: string
  h5pSubId?: string
  mediaType?: 'audio' | 'image'
  mimeType: string
  client?: ApolloClient<unknown>
}

export interface DownloadMediaForMetadataHookOutput {
  src?: string
  loading?: boolean
  error?: string
}

export const useDownloadMediaForMetadata = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
  mediaType,
  mimeType,
  client,
}: DownloadMediaForMetadataHookInput): DownloadMediaForMetadataHookOutput => {
  const [response, setReponse] = useState<DownloadMediaForMetadataHookOutput>({
    loading: true,
  })

  const { loading, error, data } = useQuery(
    GET_REQUIRED_DOWNLOAD_INFO_FOR_METADATA,
    {
      variables: { userId, roomId, h5pId, h5pSubId, mediaType },
      client: client,
    },
  )

  useEffect(() => {
    const downloadMedia = async (presignedUrl: string) => {
      try {
        const response = await fetch(presignedUrl, {
          method: 'GET',
          credentials: 'include',
        })
        if (!response.ok) {
          const error = `(${response.status}) ${response.statusText}`
          setReponse({ loading: false, error: error })
          return
        }
        const base64SymmetricKey =
          data.getRequiredDownloadInfoForMetadata.base64SymmetricKey
        const symmetricKey = Buffer.from(base64SymmetricKey, 'base64')
        const encryptedMediaArrayBuffer = await response.arrayBuffer()
        const encryptedMedia = new Uint8Array(encryptedMediaArrayBuffer)
        const decryptedMedia = decrypt(symmetricKey, encryptedMedia)
        const blob = new Blob([decryptedMedia], { type: mimeType })
        const mediaUrl = URL.createObjectURL(blob)
        setReponse({ loading: false, src: mediaUrl })
      } catch (e) {
        console.error(e)
        setReponse({ loading: false, error: JSON.stringify(e) })
      }
    }

    if (
      loading === false &&
      error === undefined &&
      data?.getRequiredDownloadInfoForMetadata?.presignedUrl !== undefined
    ) {
      downloadMedia(data.getRequiredDownloadInfoForMetadata.presignedUrl)
    }
  }, [data, loading, error])

  if (loading) {
    return { loading: true }
  }
  if (error) {
    return { loading: false, error: error.message }
  }

  return response
}

const GET_REQUIRED_DOWNLOAD_INFO_FOR_METADATA = gql`
  query getRequiredDownloadInfoForMetadata(
    $userId: String!
    $roomId: String!
    $h5pId: String!
    $h5pSubId: String
    $mediaType: String!
  ) {
    getRequiredDownloadInfoForMetadata(
      userId: $userId
      roomId: $roomId
      h5pId: $h5pId
      h5pSubId: $h5pSubId
      mediaType: $mediaType
    ) {
      base64SymmetricKey
      presignedUrl
    }
  }
`

const decrypt = (
  secretOrSharedKey: Uint8Array,
  messageWithNonce: Uint8Array,
): Uint8Array => {
  const nonce = messageWithNonce.slice(0, box.nonceLength)
  const message = messageWithNonce.slice(
    box.nonceLength,
    messageWithNonce.length,
  )

  const decrypted = box.open.after(message, nonce, secretOrSharedKey)

  if (!decrypted) {
    throw new Error('Could not decrypt message')
  }

  return decrypted
}
