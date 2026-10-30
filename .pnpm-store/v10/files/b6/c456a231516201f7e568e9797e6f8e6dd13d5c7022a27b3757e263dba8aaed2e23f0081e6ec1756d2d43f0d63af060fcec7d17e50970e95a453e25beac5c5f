import type { Root } from 'mdast';
/**
 * Filter rule format: [specifiers, source]
 * - specifiers: Array of component/function names to match
 * - source: Import source to match
 *
 * Example: [['Table', 'Button'], '@lynx']
 * Matches: import { Table, Button } from '@lynx'
 */
export type FilterRule = [string[], string];
export interface RemarkSplitMdxOptions {
    /**
     * Include rules for filtering imports and JSX elements
     * Format: [[specifiers, source], ...]
     *
     * @example
     * includes: [
     *   [['Table', 'Button'], '@lynx'],
     *   [['Card'], 'antd']
     * ]
     */
    includes?: FilterRule[];
    /**
     * Exclude rules for filtering imports and JSX elements
     * Takes precedence over includes
     * Format: [[specifiers, source], ...]
     *
     * @example
     * excludes: [
     *   [['LegacyTable'], '@lynx']
     * ]
     */
    excludes?: FilterRule[];
}
/**
 * Custom remark plugin that wraps markdown content in React Fragment
 * Only processes top-level markdown nodes, keeps JSX elements and their children intact
 */
export declare function remarkSplitMdx(options?: RemarkSplitMdxOptions): (tree: Root) => void;
