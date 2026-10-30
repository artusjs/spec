import React, { useEffect, useContext, useRef, useMemo, useCallback } from 'react';
import { ValidHeadTags, TagsWithInnerContent, HasElementTags } from 'unhead/utils';
import { useScript as useScript$1, useHead as useHead$1, useHeadSafe as useHeadSafe$1, useSeoMeta as useSeoMeta$1 } from 'unhead';
import { U as UnheadContext } from './shared/react.DF9T1fqs.mjs';

const hookImports = {
  "@unhead/react": [
    "useUnhead",
    "useHead",
    "useSeoMeta",
    "useHeadSafe"
  ]
};

function useUnhead() {
  const instance = useContext(UnheadContext);
  if (!instance) {
    throw new Error("useHead() was called without provide context.");
  }
  return instance;
}
function withSideEffects(input, options, fn) {
  const unhead = options.head || useUnhead();
  const entryRef = useRef(null);
  const inputRef = useRef(input);
  inputRef.current = input;
  if (unhead.ssr && !entryRef.current) {
    entryRef.current = fn(unhead, input, options);
  }
  useEffect(() => {
    const entry = fn(unhead, inputRef.current, options);
    entryRef.current = entry;
    return () => {
      entry.dispose();
      entryRef.current = null;
    };
  }, [unhead]);
  useEffect(() => {
    entryRef.current?.patch(input);
  }, [input]);
  if (unhead.ssr) {
    return entryRef.current;
  }
  const proxyRef = useRef(null);
  if (!proxyRef.current) {
    proxyRef.current = {
      patch: (newInput) => {
        entryRef.current?.patch(newInput);
      },
      dispose: () => {
        entryRef.current?.dispose();
        entryRef.current = null;
      },
      _poll: (rm) => {
        entryRef.current?._poll(rm);
      }
    };
  }
  return proxyRef.current;
}
function useHead(input = {}, options = {}) {
  return withSideEffects(input, options, useHead$1);
}
function useHeadSafe(input = {}, options = {}) {
  return withSideEffects(input, options, useHeadSafe$1);
}
function useSeoMeta(input = {}, options = {}) {
  return withSideEffects(input, options, useSeoMeta$1);
}
function useScript(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = options?.head || useUnhead();
  options.head = head;
  const mountCbs = [];
  let isMounted = false;
  useEffect(() => {
    isMounted = true;
    mountCbs.forEach((i) => i());
    return () => {
      isMounted = false;
    };
  }, []);
  if (typeof options.trigger === "undefined") {
    options.trigger = (load) => {
      if (isMounted) {
        load();
      } else {
        mountCbs.push(load);
      }
    };
  }
  const script = useScript$1(head, input, options);
  const sideEffects = [];
  useEffect(() => {
    return () => {
      script._triggerAbortController?.abort();
      sideEffects.forEach((i) => i());
    };
  }, []);
  const _registerCb = (key, cb) => {
    let i;
    const destroy = () => {
      if (i) {
        script._cbs[key]?.splice(i - 1, 1);
        i = null;
      }
    };
    mountCbs.push(() => {
      if (!script._cbs[key]) {
        cb(script.instance);
        return () => {
        };
      }
      i = script._cbs[key].push(cb);
      sideEffects.push(destroy);
      return destroy;
    });
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  return script;
}

const Head = ({ children, titleTemplate }) => {
  const head = useUnhead();
  const processedElements = useMemo(() => React.Children.toArray(children).filter(React.isValidElement), [children]);
  const getHeadChanges = useCallback(() => {
    const input = {
      titleTemplate
    };
    for (const element of processedElements) {
      const reactElement = element;
      const { type, props } = reactElement;
      const tagName = String(type);
      if (!ValidHeadTags.has(tagName)) {
        continue;
      }
      const data = { ...typeof props === "object" ? props : {} };
      if (TagsWithInnerContent.has(tagName) && data.children) {
        const contentKey = tagName === "script" ? "innerHTML" : "textContent";
        data[contentKey] = Array.isArray(data.children) ? data.children.map(String).join("") : String(data.children);
      }
      delete data.children;
      if (HasElementTags.has(tagName)) {
        const key = tagName;
        if (!Array.isArray(input[key])) {
          input[key] = [];
        }
        input[key].push(data);
      } else {
        input[tagName] = data;
      }
    }
    return input;
  }, [processedElements, titleTemplate]);
  const headRef = useRef(
    head.push(getHeadChanges())
  );
  useEffect(() => {
    return () => {
      if (headRef.current?.dispose) {
        headRef.current.dispose();
      }
      headRef.current = null;
    };
  }, []);
  useEffect(() => {
    headRef.current?.patch(getHeadChanges());
  }, [getHeadChanges]);
  return null;
};

export { Head, hookImports, useHead, useHeadSafe, useScript, useSeoMeta, useUnhead };
