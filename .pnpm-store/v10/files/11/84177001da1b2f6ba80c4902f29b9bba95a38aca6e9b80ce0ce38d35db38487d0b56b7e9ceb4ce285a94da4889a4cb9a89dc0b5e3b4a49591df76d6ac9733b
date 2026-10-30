import type { NormalizedSidebarGroup, SidebarItem as SidebarItemType } from '@rspress/core';
import type React from 'react';
import './SidebarItem.scss';
export declare function SidebarItemRaw({ active, text, tag, link, context, className, left, right, onClick, depth, }: {
    className?: string;
    active: boolean;
    text: string;
    tag: SidebarItemType['tag'];
    link: string | undefined;
    depth: number;
    context?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
}): import("react/jsx-runtime").JSX.Element;
export interface SidebarItemProps {
    item: SidebarItemType | NormalizedSidebarGroup;
    depth: number;
    className?: string;
}
export declare function SidebarItem(props: SidebarItemProps): import("react/jsx-runtime").JSX.Element;
