import './checkNodeVersion.js';
import * as rspackExports from './exports.js';
import { rspack as rspackFn } from './rspack.js';
type Rspack = typeof rspackFn & typeof rspackExports & {
    rspack: Rspack;
    webpack: Rspack;
};
declare const rspack: Rspack;
export * from './exports.js';
export default rspack;
export { rspack };
