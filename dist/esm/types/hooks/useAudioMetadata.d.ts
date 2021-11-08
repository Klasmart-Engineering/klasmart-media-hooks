export interface AudioMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
}
export interface AudioMetadataItem {
    id: string;
    userId: string;
    roomId?: string;
    h5pId: string;
    h5pSubId?: string;
    description: string;
    mimeType: string;
    creationDate: string | any;
}
export interface AudioMetadataHookOutput {
    loading: boolean;
    error?: any;
    audioMetadata?: AudioMetadataItem[];
}
export declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, }: AudioMetadataHookInput) => AudioMetadataHookOutput;
