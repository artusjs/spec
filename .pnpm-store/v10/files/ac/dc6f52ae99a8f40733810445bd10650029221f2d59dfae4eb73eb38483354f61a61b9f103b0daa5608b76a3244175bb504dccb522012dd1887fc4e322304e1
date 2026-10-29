/**
 * The default logger exported from this module is mainly for CLI/bootstrap
 * scenarios and backwards compatibility. When writing core runtime code,
 * prefer `context.logger` or `api.logger` so logs stay scoped to the current
 * Rsbuild instance.
 *
 * Logging message case convention:
 *
 * Info, ready, success and debug messages:
 * - Start with lowercase
 * - Example: "info  build started..."
 *
 * Errors and warnings:
 * - Start with uppercase
 * - Example: "error  Failed to build"
 *
 * This convention helps distinguish between normal operations
 * and important alerts that require attention.
 */
import { createLogger as baseCreateLogger, type Logger, logger as defaultLogger } from '../compiled/rslog';
export declare const isDebug: () => boolean;
export declare const isVerbose: (targetLogger: Pick<Logger, "level">) => boolean;
export declare const createLogger: (...args: Parameters<typeof baseCreateLogger>) => ReturnType<typeof baseCreateLogger>;
export { defaultLogger };
export type { Logger };
