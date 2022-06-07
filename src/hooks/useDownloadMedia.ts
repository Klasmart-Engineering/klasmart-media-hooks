import { ApolloClient, gql, useQuery } from '@apollo/client'
import { box } from 'tweetnacl'
import { useState, useEffect } from 'react'

export interface DownloadMediaHookInput {
  mediaId: string
  roomId: string
  mimeType: string
  client?: ApolloClient<unknown>
}

export interface DownloadMediaHookOutput {
  src?: string
  loading?: boolean
  error?: string
}

export const useDownloadMedia = ({
  mediaId,
  roomId,
  mimeType,
  client,
}: DownloadMediaHookInput): DownloadMediaHookOutput => {
  const [response, setReponse] = useState<DownloadMediaHookOutput>({
    loading: true,
  })

  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { mediaId, roomId },
    client: client,
    fetchPolicy: 'no-cache',
  })

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
          data.getRequiredDownloadInfo.base64SymmetricKey
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
      data?.getRequiredDownloadInfo?.presignedUrl !== undefined
    ) {
      downloadMedia(data.getRequiredDownloadInfo.presignedUrl)
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

const GET_REQUIRED_DOWNLOAD_INFO = gql`
  query getRequiredDownloadInfo($mediaId: String!, $roomId: String!) {
    getRequiredDownloadInfo(mediaId: $mediaId, roomId: $roomId) {
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
