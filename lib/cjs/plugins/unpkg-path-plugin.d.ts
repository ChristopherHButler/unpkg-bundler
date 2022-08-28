import * as esbuild from 'esbuild-wasm';
export declare const unpkgPathPlugin: () => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
export declare const tsUnpkgPathPlugin: () => {
    name: string;
    setup(build: esbuild.PluginBuild): void;
};
