/// <reference types="react" />
interface AudioPlayerHookInput {
    audioId: string;
    roomId?: string;
    organizationId?: string;
}
interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
declare const useDownloadAudio: ({ audioId, roomId, organizationId, }: AudioPlayerHookInput) => AudioPlayerHookOutput;

declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => AudioMetadataHookOutput;
interface AudioMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
}
interface AudioMetadataItem {
    id: string;
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
    creationDate: string | any;
}
interface AudioMetadataHookOutput {
    loading: boolean;
    error?: any;
    audioMetadata?: AudioMetadataItem[];
}

declare const PlayerWithHook: ({ audioId, roomId, organizationId, }: {
    audioId: string;
    roomId: string;
    organizationId: string;
}) => JSX.Element;

declare const AudioMetaDataWithHook: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => JSX.Element;

export { PlayerWithHook as DownloadAudio, AudioMetaDataWithHook as GetAudioMetadata, useAudioMetadata, useDownloadAudio };
