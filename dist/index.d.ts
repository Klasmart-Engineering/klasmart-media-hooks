/// <reference types="react" />
interface AudioPlayerHookInput {
    audioId: string;
    mimeType: string;
}
interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
declare const useDownloadAudio: ({ audioId, mimeType, }: AudioPlayerHookInput) => AudioPlayerHookOutput;

interface AudioMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
}
interface AudioMetadataItem {
    id: string;
    userId: string;
    roomId?: string;
    h5pId: string;
    h5pSubId?: string;
    description: string;
    mimeType: string;
    creationDate: string | any;
}
interface AudioMetadataHookOutput {
    loading: boolean;
    error?: any;
    audioMetadata?: AudioMetadataItem[];
}
declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => AudioMetadataHookOutput;

declare const AudioPlayer: ({ audioId, mimeType }: AudioPlayerHookInput) => JSX.Element;

declare const AudioMetadataList: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => JSX.Element;

export { AudioMetadataHookInput, AudioMetadataHookOutput, AudioMetadataItem, AudioMetadataList, AudioPlayer, AudioPlayerHookInput, AudioPlayerHookOutput, useAudioMetadata, useDownloadAudio };
