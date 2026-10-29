import { type ReactNode } from 'react';
export type PackageManagerTabProps = ({
    command: string;
    /**
     * If true, uses local package execution (npx, yarn, pnpm, bun, deno run).
     * For locally installed packages in node_modules.
     */
    exec?: boolean;
    /**
     * If true, uses remote package execution (npx, yarn dlx, pnpm dlx, bunx, deno run).
     * For executing packages directly from registry without installing locally.
     * Takes precedence over exec prop.
     */
    dlx?: boolean;
} | {
    command: {
        npm?: string;
        yarn?: string;
        pnpm?: string;
        bun?: string;
        deno?: string;
    };
    exec?: never;
    dlx?: never;
}) & {
    additionalTabs?: {
        tool: string;
        icon?: ReactNode;
    }[];
};
export declare function PackageManagerTabs({ command, exec, dlx, additionalTabs, }: PackageManagerTabProps): string | import("react/jsx-runtime").JSX.Element;
