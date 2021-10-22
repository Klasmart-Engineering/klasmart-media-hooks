/// <reference types="react" />
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
export declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => AudioMetadataHookOutput;
export declare const AudioMetaDataWithHook: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => JSX.Element;
declare function AudioMetaData(): JSX.Element;
export default AudioMetaData;
