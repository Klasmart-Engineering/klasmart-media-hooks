Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var client = require('@apollo/client');
var tweetnacl = require('tweetnacl');
var react = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

// const GET_REQUIRED_DOWNLOAD_INFO__WITH_ROOM_ID = gql`
//   query getRequiredDownloadInfo($audioId: String!, $roomId: String!) {
//     getRequiredDownloadInfo(audioId: $audioId, roomId: $roomId) {
//       base64SymmetricKey
//       presignedUrl
//     }
//   }
// `;
var GET_REQUIRED_DOWNLOAD_INFO = client.gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"], ["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"])));
var decrypt = function (secretOrSharedKey, messageWithNonce) {
    var messageWithNonceAsUint8Array = Buffer.from(messageWithNonce, "base64");
    var nonce = messageWithNonceAsUint8Array.slice(0, tweetnacl.box.nonceLength);
    var message = messageWithNonceAsUint8Array.slice(tweetnacl.box.nonceLength, messageWithNonce.length);
    var decrypted = tweetnacl.box.open.after(message, nonce, secretOrSharedKey);
    if (!decrypted) {
        throw new Error("Could not decrypt message");
    }
    return decrypted;
};
// TODO: replace organization with roomId
var useDownloadAudio = function (_a) {
    var audioId = _a.audioId; _a.roomId; var organizationId = _a.organizationId;
    var _b = react.useState({
        loading: true,
    }), response = _b[0], setReponse = _b[1];
    // TODO: replace query with GET_REQUIRED_DOWNLOAD_INFO__WITH_ROOM_ID that uses roomID
    var _c = client.useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
        variables: { audioId: audioId, organizationId: organizationId },
    }), loading = _c.loading, error = _c.error, data = _c.data;
    react.useEffect(function () {
        var _a;
        var downloadAudio = function (presignedUrl) { return __awaiter(void 0, void 0, void 0, function () {
            var response_1, base64SymmetricKey, symmetricKey, base64EncryptedAudio, decryptedAudio, blob, audioUrl, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(presignedUrl, {
                                method: "GET",
                                credentials: "include",
                            })];
                    case 1:
                        response_1 = _a.sent();
                        console.log("response", response_1.status);
                        base64SymmetricKey = data.getRequiredDownloadInfo.base64SymmetricKey;
                        console.log("base64SymmetricKey", base64SymmetricKey);
                        symmetricKey = Buffer.from(base64SymmetricKey, "base64");
                        console.log("symmetricKey");
                        return [4 /*yield*/, response_1.text()];
                    case 2:
                        base64EncryptedAudio = _a.sent();
                        console.log("base64EncryptedAudio");
                        decryptedAudio = decrypt(symmetricKey, base64EncryptedAudio);
                        console.log("decryptedAudio");
                        blob = new Blob([decryptedAudio], { type: "audio/webm" });
                        audioUrl = URL.createObjectURL(blob);
                        console.log("audioUrl", audioUrl);
                        setReponse({ loading: false, audioSrc: audioUrl });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        setReponse({ loading: false, error: e_1 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        if (loading === false &&
            error === undefined &&
            ((_a = data === null || data === void 0 ? void 0 : data.getRequiredDownloadInfo) === null || _a === void 0 ? void 0 : _a.presignedUrl) !== undefined) {
            downloadAudio(data.getRequiredDownloadInfo.presignedUrl);
        }
    }, [data, loading, error]);
    if (loading) {
        return { loading: true };
    }
    if (error) {
        return { loading: false, error: error.message };
    }
    return response;
};
var templateObject_1$1;

client.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"], ["\n  query getRequiredDownloadInfo($audioId: String!, $organizationId: String!) {\n    getRequiredDownloadInfo(\n      audioId: $audioId\n      organizationId: $organizationId\n    ) {\n      base64SymmetricKey\n      presignedUrl\n    }\n  }\n"])));
var PlayerWithHook = function (_a) {
    var audioId = _a.audioId, roomId = _a.roomId, organizationId = _a.organizationId;
    var _b = useDownloadAudio({
        audioId: audioId,
        roomId: roomId,
        organizationId: organizationId,
    }), loading = _b.loading, error = _b.error, audioSrc = _b.audioSrc;
    if (loading)
        return jsxRuntime.jsx("p", { children: "Loading ..." }, void 0);
    if (error) {
        return jsxRuntime.jsxs("p", { children: ["error: ", JSON.stringify(error, null, 2)] }, void 0);
    }
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("audio", { src: audioSrc, controls: true, controlsList: "nodownload" }, void 0) }, void 0));
};
var templateObject_1;

exports.Player = PlayerWithHook;
exports.useDownloadAudio = useDownloadAudio;
//# sourceMappingURL=lib.js.map
