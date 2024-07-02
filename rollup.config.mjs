import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'service-worker/index.ts',
  plugins: [
    typescript({
      outputToFilesystem: false,
      compilerOptions: {
        noUnusedLocals: false,
      },
      include: ['service-worker/index.ts', 'service-worker/workbox.d.ts'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __SERVICE_WORKER__VERSION__: Date.now(),
    }),
    nodeResolve(),
    commonjs(),
    terser(),
  ],
  output: {
    file: 'public/service-worker.js',
    format: 'iife',
  },
};
