import { type ReactElement, type ReactNode } from 'react';
import './index.scss';
type PageTabItem = {
    label?: string | ReactNode;
    content?: ReactNode;
};
export interface PageTabsProps {
    values?: ReactNode[] | ReadonlyArray<ReactNode> | PageTabItem[];
    /**
     * determine the query parameter name for the current tab
     * @default 'page''
     */
    id?: string;
    children: ReactNode;
    className?: string;
    tabPosition?: 'left' | 'center';
}
export declare const PageTabs: import("react").ForwardRefExoticComponent<PageTabsProps & import("react").RefAttributes<HTMLDivElement>>;
export type PageTabProps = Pick<PageTabItem, 'label'> & {
    children?: ReactNode;
};
export declare function PageTab({ children }: PageTabProps): ReactElement;
export {};
