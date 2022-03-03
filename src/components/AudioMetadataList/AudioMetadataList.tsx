import React from 'react'
import {
  AudioMetadataHookInput,
  useAudioMetadata,
} from '../../hooks/useAudioMetadata'

export const AudioMetadataList = ({
  userId,
  roomId,
  h5pId,
  h5pSubId,
  client,
}: AudioMetadataHookInput) => {
  const { loading, error, audioMetadata } = useAudioMetadata({
    userId,
    roomId,
    h5pId,
    h5pSubId,
    client,
  })
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>
  }
  if (loading) return <p>Loading ...</p>
  return <h1>Audio ID: {audioMetadata?.[0]?.id ?? 'none'}!</h1>
}

export default AudioMetadataList
