import type { ReactNode } from 'react';
import './index.scss';
export interface CalloutProps {
    type: 'tip' | 'note' | 'warning' | 'caution' | 'danger' | 'info' | 'details';
    title?: string;
    children: ReactNode;
}
/**
 * Construct the DOM structure of the container directive.
 * For example:
 *
 * ::: tip {title="foo"}
 * This is a tip
 * :::
 *
 * will be transformed to:
 *
 * <div class="rp-callout rp-callout--tip">
 *   <div class="rp-callout__title">Tip</div>
 *   <div class="rp-callout__content">
 *     <p>This is a tip</p>
 *   </div>
 * </div>
 */
export declare function Callout({ type, title, children }: CalloutProps): ReactNode;
export default Callout;
