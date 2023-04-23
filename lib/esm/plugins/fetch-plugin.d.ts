import * as esbuild from 'esbuild-wasm';
export declare const fetchPlugin: (inputCode: string) => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
export declare const tsxFetchPlugin: (inputCode: string) => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
