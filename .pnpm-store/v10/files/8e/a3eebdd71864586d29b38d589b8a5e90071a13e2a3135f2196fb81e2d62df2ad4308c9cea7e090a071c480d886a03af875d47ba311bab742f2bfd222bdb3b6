/**
 * Registers a cleanup callback to be executed before process termination
 */
export declare const registerCleanup: (callback: () => Promise<void>) => void;
export declare const removeCleanup: (callback: () => Promise<void>) => void;
/**
 * Sets up listeners for termination signals and stdin end event
 * This should be called once during application initialization
 */
export declare const setupGracefulShutdown: () => (() => void);
