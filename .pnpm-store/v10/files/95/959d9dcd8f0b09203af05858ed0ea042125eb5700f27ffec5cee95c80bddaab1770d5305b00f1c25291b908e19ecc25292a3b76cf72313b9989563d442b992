/**
 * The hard-coded singleton key for webpack-hot-middleware's client instance.
 * [Ref](https://github.com/webpack-contrib/webpack-hot-middleware/blob/cb29abb9dde435a1ac8e9b19f82d7d36b1093198/client.js#L152)
 */
declare const singletonKey = "__webpack_hot_middleware_reporter__";
interface WHMClient {
    cleanProblemsCache: () => void;
    problems: () => boolean;
    success: () => void;
    useCustomOverlay: (customOverlay: {
        showProblems: (type: string, data: string[]) => void;
        clear: () => void;
    }) => void;
}
declare global {
    interface Window {
        [singletonKey]: WHMClient;
    }
}
/**
 * Initializes a socket server for HMR for webpack-hot-middleware.
 * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.
 * @returns {void}
 */
export declare function init(messageHandler: (...args: unknown[]) => void): void;
export {};
