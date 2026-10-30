import type { Logger } from '../logger';
import type { CliShortcut, NormalizedConfig } from '../types/config';
export declare const isCliShortcutsEnabled: (config: NormalizedConfig) => boolean;
export declare const normalizeShortcutInput: (input: string) => string;
export declare function setupCliShortcuts({ help, openPage, closeServer, printUrls, restartServer, customShortcuts, logger, }: {
    help?: boolean | string;
    openPage: () => Promise<void>;
    closeServer: () => Promise<void>;
    printUrls: () => void;
    restartServer?: () => Promise<boolean>;
    customShortcuts?: (shortcuts: CliShortcut[]) => CliShortcut[];
    logger: Logger;
}): Promise<() => void>;
