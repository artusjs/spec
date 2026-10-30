type ColorFn = (text: string | number) => string;
declare const color: {
    dim: ColorFn;
    red: ColorFn;
    bold: ColorFn;
    blue: ColorFn;
    cyan: ColorFn;
    gray: ColorFn;
    black: ColorFn;
    green: ColorFn;
    white: ColorFn;
    reset: ColorFn;
    yellow: ColorFn;
    magenta: ColorFn;
    underline: ColorFn;
    strikethrough: ColorFn;
};

declare let LOG_TYPES: {
    error: {
        label: string;
        level: "error";
        color: ColorFn;
    };
    warn: {
        label: string;
        level: "warn";
        color: ColorFn;
    };
    info: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    start: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    ready: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    success: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    log: {
        level: "info";
    };
    debug: {
        label: string;
        level: "verbose";
        color: ColorFn;
    };
};

type LogLevel = 'silent' | 'error' | 'warn' | 'info' | 'log' | 'verbose';
type LogMessage = unknown;
interface LogType {
    label?: string;
    level: LogLevel;
    color?: ColorFn;
}
type LogFunction = (message?: LogMessage, ...args: unknown[]) => void;
interface Options {
    /**
     * Controls which log levels are emitted.
     * @default 'info'
     */
    level?: LogLevel;
    /**
     * Prepends a fixed prefix to every log message.
     * @default undefined
     */
    prefix?: string;
    /**
     * Overrides the console used by this logger instance.
     * @default globalThis.console
     */
    console?: Pick<Console, 'log' | 'warn' | 'error'>;
}
type LogMethods = keyof typeof LOG_TYPES;
type Logger = Record<LogMethods, LogFunction> & {
    greet: (message: string) => void;
    level: LogLevel;
    readonly options: Options;
    override: (customLogger: Partial<Record<LogMethods, LogFunction>>) => void;
};

declare let createLogger: (options?: Options) => Logger;

declare let logger: Logger;

export { color, createLogger, logger };
export type { LogFunction, LogLevel, LogMessage, LogType, Logger, Options };
