import type { HomeLayoutProps } from '@rspress/core/theme';
import { type DocLayoutProps, type NavProps } from '@rspress/core/theme';
import React from 'react';
export type LayoutProps = {
    top?: React.ReactNode;
    bottom?: React.ReactNode;
    HomeLayout?: React.FC<HomeLayoutProps>;
    NotFoundLayout?: React.FC<any>;
    beforeNav?: React.ReactNode;
    afterNav?: React.ReactNode;
} & Omit<DocLayoutProps, 'uiSwitch'> & HomeLayoutProps & NavProps;
export declare function Layout(props: LayoutProps): import("react/jsx-runtime").JSX.Element;
