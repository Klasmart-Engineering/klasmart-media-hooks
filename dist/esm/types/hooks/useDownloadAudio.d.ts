export declare const useDownloadAudio: ({ audioId, mimeType, }: AudioPlayerHookInput) => AudioPlayerHookOutput;
export interface AudioPlayerHookInput {
    audioId: string;
    mimeType: string;
}
interface AudioPlayerHookOutput {
    audioSrc?: string;
    htmlAudioElement?: HTMLAudioElement;
    loading?: boolean;
    error?: string;
}
export declare const decrypt: (secretOrSharedKey: Uint8Array, messageWithNonce: Uint8Array) => Uint8Array;
export {};
