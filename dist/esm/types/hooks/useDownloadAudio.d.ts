export declare const decrypt: (secretOrSharedKey: Uint8Array, messageWithNonce: string) => Uint8Array;
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
export declare const useDownloadAudio: ({ audioId, roomId, organizationId, }: AudioPlayerHookInput) => AudioPlayerHookOutput;
export {};
