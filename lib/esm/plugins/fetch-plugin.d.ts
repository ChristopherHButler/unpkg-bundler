import * as esbuild from 'esbuild-wasm';
export declare const fetchPlugin: (inputCode: string) => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
