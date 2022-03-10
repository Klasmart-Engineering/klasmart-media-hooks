import React from 'react'
import {
  DownloadMediaHookInput,
  useDownloadMedia,
} from '../../hooks/useDownloadMedia'

export const AudioPlayer = ({
  mediaId,
  roomId,
  mimeType,
  client,
}: DownloadMediaHookInput) => {
  const { loading, error, src } = useDownloadMedia({
    mediaId,
    roomId,
    mimeType,
    client,
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>error: {JSON.stringify(error, null, 2)}</p>
  }
  return (
    <div>
      <audio src={src} controls controlsList="nodownload" />
    </div>
  )
}

export default AudioPlayer
