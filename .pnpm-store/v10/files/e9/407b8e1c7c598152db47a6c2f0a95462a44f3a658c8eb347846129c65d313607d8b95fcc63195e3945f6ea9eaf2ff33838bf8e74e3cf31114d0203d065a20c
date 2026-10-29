import { useCallback, useEffect, useState } from "react";
const SYNC_STORAGE_EVENT_NAME = 'RSPRESS_SYNC_STORAGE_EVENT_NAME';
const useStorageValue = (key, defaultValue)=>{
    const [value, setValueInternal] = useState(defaultValue);
    useEffect(()=>{
        if ("u" < typeof window) return;
        const storedValue = localStorage.getItem(key);
        if (null != storedValue) setValueInternal(storedValue);
    }, [
        key
    ]);
    const setValue = useCallback((value)=>{
        const next = value;
        if (null == next) localStorage.removeItem(key);
        else localStorage.setItem(key, next.toString());
        setValueInternal(next);
        dispatchEvent(new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
            detail: {
                key,
                newValue: next
            }
        }));
    }, [
        key
    ]);
    useEffect(()=>{
        const listener = (e)=>{
            if (e.key === key) setValueInternal(localStorage.getItem(key) ?? defaultValue);
        };
        window.addEventListener('storage', listener);
        return ()=>{
            window.removeEventListener('storage', listener);
        };
    }, [
        key,
        defaultValue
    ]);
    useEffect(()=>{
        const listener = (e)=>{
            const { key: eventKey, newValue } = e.detail;
            if (eventKey === key) setValueInternal(newValue ?? defaultValue);
        };
        window.addEventListener(SYNC_STORAGE_EVENT_NAME, listener);
        return ()=>{
            window.removeEventListener(SYNC_STORAGE_EVENT_NAME, listener);
        };
    }, []);
    return [
        value,
        setValue
    ];
};
export { useStorageValue };
