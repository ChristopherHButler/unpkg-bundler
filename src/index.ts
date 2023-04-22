import * as esbuild from 'esbuild-wasm';

import { unpkgPathPlugin, tsUnpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin, tsxFetchPlugin } from './plugins/fetch-plugin';


let service: esbuild.Service;

interface BundleArgs {
  rawCode: string;
  typescript?: boolean;
  versionTag?: string;
}

const bundle = async ({ rawCode, typescript = false, versionTag = '0.8.36' }: BundleArgs) => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: `https://unpkg.com/esbuild-wasm@${versionTag}/esbuild.wasm`,
    });
  }

  // support for tsx (react + typescript)
  const entryPoint = (typescript) ? 'index.ts' : 'index.js';
  const plugins = typescript ? [tsUnpkgPathPlugin(), tsxFetchPlugin(rawCode)] : [unpkgPathPlugin(), fetchPlugin(rawCode)];

  try {
    const result = await service.build({
      entryPoints: [entryPoint],
      bundle: true,
      write: false,
      plugins,
      define: {
        // vite somehow overwrite the string 'process.env.NODE_ENV' with the actual process.env.NODE_ENV values, so we must trick it
        'process'+'.env.NODE_ENV': '"production"',
        global: 'window'
      },
    });
    return {
      code: result.outputFiles[0].text,
      err: '',
    };
  } catch (err) {
    return {
      code: '',
      err: err.message,
    };
  }

};

export default bundle;
