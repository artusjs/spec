import { type ReactElement, type ReactNode } from 'react';
import './index.scss';
type TabItem = {
    label?: string | ReactNode;
    disabled?: boolean;
    content?: ReactNode;
};
export interface TabsProps {
    values?: ReactNode[] | ReadonlyArray<ReactNode> | TabItem[];
    /**
     * @default 0
     */
    defaultIndex?: number;
    onChange?: (index: number) => void;
    children: ReactNode;
    /**
     * If set, tabs with the same `groupId` will share the same active tab state via `localStorage`.
     * @default undefined
     */
    groupId?: string;
    tabPosition?: 'left' | 'center';
    /**
     * It is very useful during the transition animation and the first screen rendering of Static Site Generation (SSG).
     * @default true
     */
    keepDOM?: boolean;
    className?: string;
    labelItemClassName?: string;
    contentItemClassName?: string;
}
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<HTMLDivElement>>;
export type TabProps = Pick<TabItem, 'label' | 'disabled'> & {
    children: ReactNode;
};
export declare function Tab({ children }: TabProps): ReactElement;
export {};
