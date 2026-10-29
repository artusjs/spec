import { type ReactNode } from 'react';
import './index.scss';
export type BannerProps = {
    /**
     * @default true
     */
    display?: boolean;
    className?: string;
} & ({
    /**
     * @default 'localStorage'
     */
    storage?: 'localStorage' | 'sessionStorage' | false;
    /**
     * @default 'rp-banner-closed'
     */
    storageKey?: string;
    href: string;
    message: string | ReactNode;
} | {
    customChildren: ReactNode;
});
/**
 * @example
 * // theme/index.tsx
 * import { Layout as BasicLayout, Banner } from '@rspress/core/theme-original';
 * import { useLang } from '@rspress/core/runtime';
 * const Layout = () => {
      const lang = useLang();
      return (
        <BasicLayout
          beforeNav={
              <Banner
                href="/"
                message={
                  lang === 'en'
                    ? '🚧 Rspress 2.0 document is under development'
                    : '🚧 Rspress 2.0 文档还在开发中'
                }
              />
          }
        />
      );
    };
    export { Layout }
 *
 */
export declare const Banner: import("react").ForwardRefExoticComponent<BannerProps & import("react").RefAttributes<HTMLDivElement>>;
