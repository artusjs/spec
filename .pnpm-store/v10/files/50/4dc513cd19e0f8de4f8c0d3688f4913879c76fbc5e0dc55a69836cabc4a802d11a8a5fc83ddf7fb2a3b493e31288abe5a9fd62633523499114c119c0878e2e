import { useSite } from "@rspress/core/runtime";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery.js";
import { useStorageValue } from "./useStorageValue.js";
const APPEARANCE_KEY = 'rspress-theme-appearance';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';
const applyThemeToDOM = (theme)=>{
    if (!document || !document.documentElement) return;
    const root = document.documentElement;
    root.classList.toggle('dark', 'dark' === theme);
    root.classList.toggle('rp-dark', 'dark' === theme);
    root.style.colorScheme = theme;
};
function useThemeState() {
    const { site } = useSite();
    const disableDarkMode = false === site.themeConfig.darkMode;
    const prefersDark = useMediaQuery(MEDIA_QUERY);
    const [storedConfig, setStoredConfig] = useStorageValue(APPEARANCE_KEY, 'auto');
    const resolvedTheme = useMemo(()=>{
        if ("u" < typeof window) return 'light';
        if (disableDarkMode) return 'light';
        const defaultTheme = window.RSPRESS_THEME;
        if (defaultTheme) return 'dark' === defaultTheme ? 'dark' : 'light';
        return 'auto' === storedConfig ? prefersDark ? 'dark' : 'light' : storedConfig;
    }, [
        disableDarkMode,
        prefersDark,
        storedConfig
    ]);
    const setTheme = useCallback((value, storeValue = value)=>{
        if (disableDarkMode) return;
        setStoredConfig(storeValue);
        applyThemeToDOM(value);
    }, [
        disableDarkMode,
        setStoredConfig
    ]);
    useLayoutEffect(()=>{
        if (disableDarkMode) return;
        applyThemeToDOM(resolvedTheme);
    }, [
        disableDarkMode,
        resolvedTheme
    ]);
    return [
        resolvedTheme,
        setTheme
    ];
}
export { useThemeState };
