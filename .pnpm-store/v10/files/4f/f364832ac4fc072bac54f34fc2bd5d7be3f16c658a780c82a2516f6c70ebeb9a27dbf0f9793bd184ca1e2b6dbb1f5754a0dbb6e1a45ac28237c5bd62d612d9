import type { NavItemWithChildren } from '@rspress/core';
import './index.scss';
type Items = NavItemWithChildren['items'];
interface HoverGroupProps {
    items?: Items;
    customChildren?: React.ReactNode;
    isOpen: boolean;
    /**
     * @default center
     */
    position?: 'left' | 'center' | 'right';
    activeMatcher?: (item: Items[number]) => boolean;
}
declare function HoverGroup({ items, customChildren, isOpen, position, activeMatcher, }: HoverGroupProps): import("react/jsx-runtime").JSX.Element;
export type { HoverGroupProps, Items };
export { HoverGroup };
