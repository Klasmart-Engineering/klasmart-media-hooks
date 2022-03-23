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
  })

  useEffect(() => {
    const downloadMedia = async (presignedUrl: string) => {
      console.log(`[useDownloadMedia] starting presignedUrl download...`)
      try {
        const response = await fetch(presignedUrl, {
          method: 'GET',
          credentials: 'include',
        })
        if (!response.ok) {
          try {
            const errorBody = await response.text()
            console.log(
              `[useDownloadMedia] presignedUrl download failed. response: ${errorBody}`,
            )
          } catch (err) {
            // Ignore
          }
          const error = `(${response.status}) ${response.statusText}`
          console.log(
            `[useDownloadMedia] presignedUrl download failed. status: ${error}`,
          )
          setReponse({ loading: false, error: error })
          return
        }
        const status = `(${response.status}) ${response.statusText}`
        console.log(
          `[useDownloadMedia] presignedUrl download successful. status: ${status}`,
        )
        const base64SymmetricKey =
          data.getRequiredDownloadInfo.base64SymmetricKey
        const symmetricKey = Buffer.from(base64SymmetricKey, 'base64')
        const encryptedMediaArrayBuffer = await response.arrayBuffer()
        const encryptedMedia = new Uint8Array(encryptedMediaArrayBuffer)
        const decryptedMedia = decrypt(symmetricKey, encryptedMedia)
        console.log(`[useDownloadMedia] media decrypted`)
        const blob = new Blob([decryptedMedia], { type: mimeType })
        console.log(`[useDownloadMedia] blob created. mimeType: ${mimeType}`)
        let mediaUrl: string
        if (window.webkitURL) {
          mediaUrl = window.webkitURL.createObjectURL(blob)
          console.log(`[useDownloadMedia] using webkitURL.createObjectURL`)
        } else if (window.URL?.createObjectURL) {
          console.log(`[useDownloadMedia] using URL.createObjectURL`)
          mediaUrl = window.URL.createObjectURL(blob)
        } else {
          throw new Error('No valid createObjectURL available.')
        }
        //console.log(`[useDownloadMedia] createObjectURL(blob) called`)
        setReponse({ loading: false, src: mediaUrl })
        console.log(
          `[useDownloadMedia] setResponse called. mediaUrl: ${mediaUrl}`,
        )
      } catch (e) {
        console.error(`[useDownloadMedia] an error occurred:`, e)
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
