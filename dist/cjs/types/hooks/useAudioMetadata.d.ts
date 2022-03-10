import { ApolloClient } from '@apollo/client';
export interface MediaMetadataHookInput {
    userId: string;
    roomId: string;
    h5pId: string;
    h5pSubId?: string;
    client?: ApolloClient<unknown>;
}
export interface MediaMetadataItem {
    id: string;
    userId: string;
    roomId?: string;
    h5pId: string;
    h5pSubId?: string;
    description: string;
    mimeType: string;
    createdAt: string | any;
}
export interface MediaMetadataHookOutput {
    loading: boolean;
    error?: any;
    mediaMetadata?: MediaMetadataItem[];
}
export declare const useAudioMetadata: ({ userId, roomId, h5pId, h5pSubId, client, }: MediaMetadataHookInput) => MediaMetadataHookOutput;
