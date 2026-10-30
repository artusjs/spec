import './index.scss';
import type { Header } from '@rspress/core';
export interface GroupItem {
    text: string;
    link: string;
    headers?: Omit<Header, 'charIndex'>[];
    items?: {
        text: string;
        link: string;
    }[];
}
export interface Group {
    name: string;
    items: GroupItem[];
}
export declare const OverviewGroup: ({ group }: {
    group: Group;
}) => import("react/jsx-runtime").JSX.Element;
