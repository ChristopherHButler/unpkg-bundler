"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var esbuild = __importStar(require("esbuild-wasm"));
var unpkg_path_plugin_1 = require("./plugins/unpkg-path-plugin");
var fetch_plugin_1 = require("./plugins/fetch-plugin");
var service;
var bundle = function (_a) {
    var rawCode = _a.rawCode, _b = _a.typescript, typescript = _b === void 0 ? false : _b, _c = _a.versionTag, versionTag = _c === void 0 ? '0.8.36' : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var entryPoint, plugins, result, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!!service) return [3 /*break*/, 2];
                    return [4 /*yield*/, esbuild.startService({
                            worker: true,
                            wasmURL: "https://unpkg.com/esbuild-wasm@" + versionTag + "/esbuild.wasm",
                        })];
                case 1:
                    service = _d.sent();
                    _d.label = 2;
                case 2:
                    entryPoint = (typescript) ? 'index.ts' : 'index.js';
                    plugins = typescript ? [unpkg_path_plugin_1.tsUnpkgPathPlugin(), fetch_plugin_1.tsxFetchPlugin(rawCode)] : [unpkg_path_plugin_1.unpkgPathPlugin(), fetch_plugin_1.fetchPlugin(rawCode)];
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, service.build({
                            entryPoints: [entryPoint],
                            bundle: true,
                            write: false,
                            plugins: plugins,
                            define: {
                                [['process','env','NODE_ENV'].join(".")]: '"production"',
                                global: 'window'
                            },
                        })];
                case 4:
                    result = _d.sent();
                    return [2 /*return*/, {
                            code: result.outputFiles[0].text,
                            err: '',
                        }];
                case 5:
                    err_1 = _d.sent();
                    return [2 /*return*/, {
                            code: '',
                            err: err_1.message,
                        }];
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.default = bundle;
