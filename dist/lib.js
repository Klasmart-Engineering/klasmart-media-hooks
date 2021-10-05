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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var GET_REQUIRED_DOWNLOAD_INFO = client.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nquery getRequiredDownloadInfo(\n    $audioId: String!\n    $organizationId: String!,) {\n  getRequiredDownloadInfo(\n    audioId: $audioId,\n    organizationId: $organizationId,\n  ) {\n    base64SymmetricKey\n    presignedUrl\n  }\n}\n"], ["\nquery getRequiredDownloadInfo(\n    $audioId: String!\n    $organizationId: String!,) {\n  getRequiredDownloadInfo(\n    audioId: $audioId,\n    organizationId: $organizationId,\n  ) {\n    base64SymmetricKey\n    presignedUrl\n  }\n}\n"])));
var decrypt = function (secretOrSharedKey, messageWithNonce) {
    var messageWithNonceAsUint8Array = Buffer.from(messageWithNonce, 'base64');
    var nonce = messageWithNonceAsUint8Array.slice(0, tweetnacl.box.nonceLength);
    var message = messageWithNonceAsUint8Array.slice(tweetnacl.box.nonceLength, messageWithNonce.length);
    var decrypted = tweetnacl.box.open.after(message, nonce, secretOrSharedKey);
    if (!decrypted) {
        throw new Error('Could not decrypt message');
    }
    return decrypted;
};
var useAudio = function (audio) {
    var _a = react.useState(false), playing = _a[0], setPlaying = _a[1];
    var toggle = function () { return setPlaying(!playing); };
    react.useEffect(function () {
        playing ? audio.play() : audio.pause();
    }, [audio, playing]);
    react.useEffect(function () {
        audio.addEventListener('ended', function () { return setPlaying(false); });
        return function () {
            audio.removeEventListener('ended', function () { return setPlaying(false); });
        };
    });
    return [playing, toggle];
};
var Player = function (_a) {
    var audioId = _a.audioId, organizationId = _a.organizationId;
    var _b = client.useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
        variables: { audioId: audioId, organizationId: organizationId },
    }), loading = _b.loading, error = _b.error, data = _b.data;
    var _c = react.useState(new Audio()), audio = _c[0], setAudio = _c[1];
    var _d = useAudio(audio), playing = _d[0], toggle = _d[1];
    react.useEffect(function () {
        if (loading)
            return;
        if (error) {
            console.log(error);
            return;
        }
        var presignedUrl = data.getRequiredDownloadInfo.presignedUrl;
        var downloadAudio = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, base64SymmetricKey, symmetricKey, base64EncryptedAudio, decryptedAudio, audioUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(presignedUrl, {
                            method: 'GET',
                            credentials: 'include',
                        })];
                    case 1:
                        response = _a.sent();
                        console.log("response", response.status);
                        base64SymmetricKey = data.getRequiredDownloadInfo.base64SymmetricKey;
                        console.log("base64SymmetricKey", base64SymmetricKey);
                        symmetricKey = Buffer.from(base64SymmetricKey, 'base64');
                        console.log("symmetricKey");
                        return [4 /*yield*/, response.text()];
                    case 2:
                        base64EncryptedAudio = _a.sent();
                        console.log("base64EncryptedAudio");
                        decryptedAudio = decrypt(symmetricKey, base64EncryptedAudio);
                        console.log("decryptedAudio");
                        audioUrl = URL.createObjectURL(new Blob([decryptedAudio], { type: "audio/webm" }));
                        console.log("audioUrl", audioUrl);
                        setAudio(new Audio(audioUrl));
                        return [2 /*return*/];
                }
            });
        }); };
        downloadAudio();
    }, [loading, error, data]);
    if (loading)
        return jsxRuntime.jsx("p", { children: "Loading ..." }, void 0);
    if (error) {
        return jsxRuntime.jsxs("p", { children: ["error: ", JSON.stringify(error, null, 2)] }, void 0);
    }
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("button", __assign({ onClick: toggle }, { children: playing ? "Pause" : "Play" }), void 0) }, void 0));
};
var templateObject_1;

var KidsLoopAudioServicePlayer = {
    Player: Player
};

exports["default"] = KidsLoopAudioServicePlayer;
//# sourceMappingURL=lib.js.map
