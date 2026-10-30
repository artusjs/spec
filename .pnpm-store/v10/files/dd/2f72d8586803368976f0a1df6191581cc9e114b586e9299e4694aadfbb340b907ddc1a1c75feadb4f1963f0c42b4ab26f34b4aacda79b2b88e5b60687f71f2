import { type TransitionStartFunction } from 'react';
type LinkType = 'external' | 'hashOnly' | 'relative' | 'internal';
export declare function getHref(href: string): {
    withBaseHref: string;
    removeBaseHref: string;
    linkType: LinkType;
};
/**
 * For import { Link } from '@rspress/core/theme';
 * useNavigate with preload logic
 */
export declare function useLinkNavigate({ startTransition }?: {
    startTransition?: TransitionStartFunction;
}): (href: string) => Promise<void>;
export {};
