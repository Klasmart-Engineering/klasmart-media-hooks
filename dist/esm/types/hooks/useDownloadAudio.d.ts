export interface AudioPlayerHookInput {
    audioId: string;
    mimeType: string;
}
export interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
export declare const useDownloadAudio: ({ audioId, mimeType, }: AudioPlayerHookInput) => AudioPlayerHookOutput;
