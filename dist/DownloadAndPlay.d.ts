/// <reference types="react" />
export declare const decrypt: (secretOrSharedKey: Uint8Array, messageWithNonce: string) => Uint8Array;
declare const Player: ({ audioId, organizationId }: {
    audioId: string;
    organizationId: string;
}) => JSX.Element;
export default Player;
