import * as esbuild from 'esbuild-wasm';
export declare const unpkgPathPlugin: () => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
