/// <reference types="react" />
export declare const decrypt: (secretOrSharedKey: Uint8Array, messageWithNonce: string) => Uint8Array;
export declare const PlayerWithHook: ({ audioId, roomId, organizationId, }: {
    audioId: string;
    roomId: string;
    organizationId: string;
}) => JSX.Element;
declare const Player: ({ audioId, organizationId, }: {
    audioId: string;
    organizationId: string;
}) => JSX.Element;
export default Player;
