export type LoadEnvOptions = {
    /**
     * The root path to load the env file
     * @default process.cwd()
     */
    cwd?: string;
    /**
     * Used to specify the name of the .env.[mode] file
     * @default process.env.NODE_ENV
     */
    mode?: string;
    /**
     * The prefix of public variables
     * @default ['PUBLIC_']
     */
    prefixes?: string[];
    /**
     * Specify a target object to store environment variables.
     * If not provided, variables will be written to `process.env`.
     * @default process.env
     */
    processEnv?: Record<string, string>;
};
export type LoadEnvResult = {
    /**
     * All environment variables in the .env file
     */
    parsed: Record<string, string>;
    /**
     * The absolute paths to all env files
     */
    filePaths: string[];
    /**
     * Environment variables that start with prefixes.
     *
     * @example
     * ```ts
     * {
     *   PUBLIC_FOO: 'bar',
     * }
     * ```
     **/
    rawPublicVars: Record<string, string | undefined>;
    /**
     * Formatted environment variables that start with prefixes.
     * The keys contain the prefixes `process.env.*` and `import.meta.env.*`.
     * The values are processed by `JSON.stringify`.
     *
     * @example
     * ```ts
     * {
     *   'process.env.PUBLIC_FOO': '"bar"',
     *   'import.meta.env.PUBLIC_FOO': '"bar"',
     * }
     * ```
     **/
    publicVars: Record<string, string>;
    /**
     * Clear the environment variables mounted on `process.env`
     */
    cleanup: () => void;
};
export declare function loadEnv({ cwd, mode, prefixes, processEnv, }?: LoadEnvOptions): LoadEnvResult;
