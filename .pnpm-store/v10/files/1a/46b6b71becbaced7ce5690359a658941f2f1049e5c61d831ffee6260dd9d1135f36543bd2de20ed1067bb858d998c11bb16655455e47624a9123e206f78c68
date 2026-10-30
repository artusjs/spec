import react__default, { ReactNode } from 'react';
import { UseHeadInput, HeadEntryOptions, ActiveHeadEntry, HeadSafe, UseScriptInput, UseScriptOptions, UseScriptReturn, UseSeoMetaInput, Unhead } from 'unhead/types';

declare const hookImports: {
    '@unhead/react': string[];
};

interface HeadProps {
    children: ReactNode;
    titleTemplate?: string;
}
declare const Head: react__default.FC<HeadProps>;

declare function useUnhead(): Unhead;
declare function useHead(input?: UseHeadInput, options?: HeadEntryOptions): ActiveHeadEntry<UseHeadInput>;
declare function useHeadSafe(input?: HeadSafe, options?: HeadEntryOptions): ActiveHeadEntry<HeadSafe>;
declare function useSeoMeta(input?: UseSeoMetaInput, options?: HeadEntryOptions): ActiveHeadEntry<UseSeoMetaInput>;
declare function useScript<T extends Record<symbol | string, any> = Record<symbol | string, any>>(_input: UseScriptInput, _options?: UseScriptOptions<T>): UseScriptReturn<T>;

export { Head, hookImports, useHead, useHeadSafe, useScript, useSeoMeta, useUnhead };
