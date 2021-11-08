import { ApolloClient } from '@apollo/client';
export interface AudioPlayerHookInput {
    audioId: string;
    mimeType: string;
    client?: ApolloClient<unknown>;
}
export interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
export declare const useDownloadAudio: ({ audioId, mimeType, client, }: AudioPlayerHookInput) => AudioPlayerHookOutput;
