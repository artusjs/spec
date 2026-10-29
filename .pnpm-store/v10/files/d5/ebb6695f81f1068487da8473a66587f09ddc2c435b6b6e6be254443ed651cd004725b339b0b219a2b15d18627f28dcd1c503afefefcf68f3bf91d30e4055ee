import type { TraceMap } from '@jridgewell/trace-mapping';
import type { StackFrame } from 'stacktrace-parser';
import type { BrowserLogsStackTrace, InternalContext, Rspack } from '../types';
export type CachedTraceMap = Map<string, TraceMap>;
/**
 * Formats error messages received from the browser into a log string with
 * source location information.
 */
export declare const formatBrowserErrorLog: (message: string, context: InternalContext, fs: Rspack.OutputFileSystem, stackTrace: BrowserLogsStackTrace, stackFrames: StackFrame[] | null, cachedTraceMap: CachedTraceMap) => Promise<string>;
