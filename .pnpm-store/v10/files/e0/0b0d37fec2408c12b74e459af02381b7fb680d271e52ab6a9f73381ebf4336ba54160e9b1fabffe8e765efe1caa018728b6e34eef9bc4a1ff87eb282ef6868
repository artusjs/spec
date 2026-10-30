import * as react from 'react';
import { ReactNode } from 'react';
import * as unhead_types from 'unhead/types';
import { Unhead } from 'unhead/types';
export { CreateServerHeadOptions, SSRHeadPayload, Unhead } from 'unhead/types';
export { createHead, extractUnheadInputFromHtml, renderSSRHead, transformHtmlTemplate } from 'unhead/server';

declare function UnheadProvider({ children, value }: {
    children: ReactNode;
    value: Unhead;
}): react.FunctionComponentElement<react.ProviderProps<Unhead<unhead_types.ResolvableHead> | null>>;

export { UnheadProvider };
