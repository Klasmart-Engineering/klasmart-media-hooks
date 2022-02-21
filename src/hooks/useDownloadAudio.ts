import { ApolloClient, gql, useQuery } from '@apollo/client'
import { box } from 'tweetnacl'
import { useState, useEffect } from 'react'

export interface AudioPlayerHookInput {
  audioId: string
  roomId: string
  mimeType: string
  client?: ApolloClient<unknown>
}

export interface AudioPlayerHookOutput {
  audioSrc?: string
  htmlAudioElement?: HTMLAudioElement
  loading?: boolean
  error?: string
}

export const useDownloadAudio = ({
  audioId,
  roomId,
  mimeType,
  client,
}: AudioPlayerHookInput): AudioPlayerHookOutput => {
  const [response, setReponse] = useState<AudioPlayerHookOutput>({
    loading: true,
  })

  const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
    variables: { audioId, roomId },
    client: client,
  })

  useEffect(() => {
    const downloadAudio = async (presignedUrl: string) => {
      try {
        const response = await fetch(presignedUrl, {
          method: 'GET',
          credentials: 'include',
        })
        console.log('response', response.status)
        const base64SymmetricKey =
          data.getRequiredDownloadInfo.base64SymmetricKey
        console.log('base64SymmetricKey', base64SymmetricKey)
        const symmetricKey = Buffer.from(base64SymmetricKey, 'base64')
        console.log('symmetricKey')
        const encryptedAudioArrayBuffer = await response.arrayBuffer()
        const encryptedAudio = new Uint8Array(encryptedAudioArrayBuffer)
        console.log('encryptedAudio')
        const decryptedAudio = decrypt(symmetricKey, encryptedAudio)
        console.log('decryptedAudio')
        const blob = new Blob([decryptedAudio], { type: mimeType })
        const audioUrl = URL.createObjectURL(blob)
        console.log('audioUrl', audioUrl)
        setReponse({ loading: false, audioSrc: audioUrl })
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
      downloadAudio(data.getRequiredDownloadInfo.presignedUrl)
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
  query getRequiredDownloadInfo($audioId: String!, $roomId: String!) {
    getRequiredDownloadInfo(audioId: $audioId, roomId: $roomId) {
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
