/// <reference types="react" />
import { ApolloClient } from '@apollo/client';

interface AudioPlayerHookInput {
    audioId: string;
    roomId: string;
    mimeType: string;
    client?: ApolloClient<unknown>;
}
interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
declare const useDownloadAudio: ({ audioId, roomId, mimeType, client, }: AudioPlayerHookInput) => AudioPlayerHookOutput;

interface AudioMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
    client?: ApolloClient<unknown>;
}
interface AudioMetadataItem {
    id: string;
    userId: string;
    roomId?: string;
    h5pId: string;
    h5pSubId?: string;
    description: string;
    mimeType: string;
    createdAt: string | any;
}
interface AudioMetadataHookOutput {
    loading: boolean;
    error?: any;
    audioMetadata?: AudioMetadataItem[];
}
declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, client, }: AudioMetadataHookInput) => AudioMetadataHookOutput;

declare const AudioPlayer: ({ audioId, roomId, mimeType, client, }: AudioPlayerHookInput) => JSX.Element;

declare const AudioMetadataList: ({ userId, roomId, h5pId, h5pSubId, client, }: AudioMetadataHookInput) => JSX.Element;

export { AudioMetadataHookInput, AudioMetadataHookOutput, AudioMetadataItem, AudioMetadataList, AudioPlayer, AudioPlayerHookInput, AudioPlayerHookOutput, useAudioMetadata, useDownloadAudio };
