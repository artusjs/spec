import { createElement } from 'react';
import { createHead as createHead$1, createDebouncedFn, renderDOMHead } from 'unhead/client';
export { renderDOMHead } from 'unhead/client';
import { U as UnheadContext } from './shared/react.DF9T1fqs.mjs';

function createHead(options = {}) {
  const head = createHead$1({
    domOptions: {
      render: createDebouncedFn(() => renderDOMHead(head), (fn) => setTimeout(fn, 0))
    },
    ...options
  });
  return head;
}
function UnheadProvider({ children, head }) {
  return createElement(UnheadContext.Provider, { value: head || createHead() }, children);
}

export { UnheadProvider, createHead };
