import type React from 'react';
import type { ComponentProps, TransitionStartFunction } from 'react';
import './index.scss';
export interface LinkProps extends ComponentProps<'a'> {
    href?: string;
    children?: React.ReactNode;
    className?: string;
    onMouseEnter?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    /**
     * Get isPending state of Link navigation
     *
     * ```tsx
     * const [isPending, startTransition] = useTransition();
     * <Link
     *   href="/some-path"
     *   startTransition={startTransition}
     * >
     *   Some Link
     * </Link>
     * ```
     *
     * @private
     * @unstable
     */
    startTransition?: TransitionStartFunction;
}
/**
 * What's the difference between <Link> and <a>?
 * Link can tell whether it's in current site or external site.
 * 1. If external, open a new page and navigate to it.
 * 2. If inCurrentPage, scroll to anchor.
 * 3. If inCurrentSite, it will navigate and scroll to anchor, preload the asyncChunk onHover the link
 * 4. Link is styled.
 */
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
