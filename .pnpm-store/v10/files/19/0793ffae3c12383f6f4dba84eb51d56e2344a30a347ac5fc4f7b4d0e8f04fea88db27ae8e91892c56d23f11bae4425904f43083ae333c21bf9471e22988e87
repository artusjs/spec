import * as react from 'react';
import { ReactNode } from 'react';
import * as unhead_types from 'unhead/types';
import { CreateClientHeadOptions, Unhead } from 'unhead/types';
export { CreateClientHeadOptions, Unhead } from 'unhead/types';
export { renderDOMHead } from 'unhead/client';

declare function createHead(options?: CreateClientHeadOptions): Unhead;
declare function UnheadProvider({ children, head }: {
    children: ReactNode;
    head?: ReturnType<typeof createHead>;
}): react.FunctionComponentElement<react.ProviderProps<Unhead<unhead_types.ResolvableHead> | null>>;

export { UnheadProvider, createHead };
