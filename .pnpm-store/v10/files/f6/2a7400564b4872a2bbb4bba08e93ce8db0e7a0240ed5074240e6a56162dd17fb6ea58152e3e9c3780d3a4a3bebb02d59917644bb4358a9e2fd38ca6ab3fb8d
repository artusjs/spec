declare global {
    interface Window {
        MODERN_THEME?: string;
        RSPRESS_THEME?: string;
    }
}
/** Resolved theme value used in the app */
type ThemeValue = 'light' | 'dark';
/** Theme config value stored in localStorage */
type ThemeConfigValue = ThemeValue | 'auto';
/**
 * State provider for theme context.
 * @internal
 */
export declare function useThemeState(): readonly [ThemeValue, (value: ThemeValue, storeValue?: ThemeConfigValue) => void];
export {};
