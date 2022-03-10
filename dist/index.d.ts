/// <reference types="react" />
import { ApolloClient } from '@apollo/client';

interface DownloadMediaHookInput {
    mediaId: string;
    roomId: string;
    mimeType: string;
    client?: ApolloClient<unknown>;
}
interface DownloadMediaHookOutput {
    src?: string;
    loading?: boolean;
    error?: string;
}
declare const useDownloadMedia: ({ mediaId, roomId, mimeType, client, }: DownloadMediaHookInput) => DownloadMediaHookOutput;

interface MediaMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
    client?: ApolloClient<unknown>;
}
interface MediaMetadataItem {
    id: string;
    userId: string;
    roomId?: string;
    h5pId: string;
    h5pSubId?: string;
    description: string;
    mimeType: string;
    createdAt: string | any;
}
interface MediaMetadataHookOutput {
    loading: boolean;
    error?: any;
    mediaMetadata?: MediaMetadataItem[];
}
declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, client, }: MediaMetadataHookInput) => MediaMetadataHookOutput;

declare const AudioPlayer: ({ mediaId, roomId, mimeType, client, }: DownloadMediaHookInput) => JSX.Element;

declare const AudioMetadataList: ({ userId, roomId, h5pId, h5pSubId, client, }: MediaMetadataHookInput) => JSX.Element;

export { AudioMetadataList, AudioPlayer, DownloadMediaHookInput, DownloadMediaHookOutput, MediaMetadataHookInput, MediaMetadataHookOutput, MediaMetadataItem, useAudioMetadata, useDownloadMedia };
