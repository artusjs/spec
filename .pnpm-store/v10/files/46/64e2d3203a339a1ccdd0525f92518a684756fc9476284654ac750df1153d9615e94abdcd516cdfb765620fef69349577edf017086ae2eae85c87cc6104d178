# react-render-to-markdown

[![npm version](https://img.shields.io/npm/v/react-render-to-markdown.svg)](https://www.npmjs.com/package/react-render-to-markdown)
[![license](https://img.shields.io/npm/l/react-render-to-markdown.svg)](https://github.com/SoonIter/react-render-to-markdown/blob/main/LICENSE)

Render React components to Markdown strings — like `renderToString` in `react-dom`, but outputs **Markdown** instead of HTML.

Built on top of `react-reconciler`, this library creates a custom React renderer that traverses the React element tree and produces well-formatted Markdown. It follows **SSR-like behavior**: `useEffect`, `useLayoutEffect`, and `useInsertionEffect` are suppressed (as no-ops), while `useState`, `useMemo`, `useRef`, `useContext`, and other synchronous hooks work as expected.

## Installation

The major version of `react-render-to-markdown` follows the React version. Install the one that matches your project:

```bash
# React 19
npm install react-render-to-markdown@19

# React 18
npm install react-render-to-markdown@18
```

## Quick Start

```tsx
import { renderToMarkdownString } from 'react-render-to-markdown';

const markdown = await renderToMarkdownString(<h1>Hello, World!</h1>);
console.log(markdown); // # Hello, World!
```

## Usage

### Basic HTML Elements

```tsx
import { renderToMarkdownString } from 'react-render-to-markdown';

await renderToMarkdownString(
  <div>
    <strong>foo</strong>
    <span>bar</span>
  </div>,
);
// Output: '**foo**bar'
```

### React Components & Hooks

Synchronous hooks (`useState`, `useMemo`, `useRef`, `useContext`, etc.) work as expected. Client-side effects (`useEffect`, `useLayoutEffect`) are automatically suppressed:

```tsx
import { createContext, useContext, useMemo, useState } from 'react';
import { renderToMarkdownString } from 'react-render-to-markdown';

const ThemeContext = createContext('light');

const Article = () => {
  const [count] = useState(42);
  const theme = useContext(ThemeContext);
  const doubled = useMemo(() => count * 2, [count]);

  return (
    <>
      <h1>Hello World</h1>
      <p>Count: {count}, Doubled: {doubled}, Theme: {theme}</p>
    </>
  );
};

await renderToMarkdownString(
  <ThemeContext.Provider value="dark">
    <Article />
  </ThemeContext.Provider>,
);
// Output:
// # Hello World
//
// Count: 42, Doubled: 84, Theme: dark
```

### Code Blocks

Fenced code blocks with language and title support:

```tsx
await renderToMarkdownString(
  <pre data-lang="ts" data-title="rspress.config.ts">
    <code>{'const a = 1;\n'}</code>
  </pre>,
);
// Output:
// ```ts title=rspress.config.ts
// const a = 1;
// ```
```

For languages that may contain triple backticks (like `markdown`, `mdx`, `md`), four backticks (``````) are automatically used as delimiters.

## Supported Elements

| HTML Element | Markdown Output |
| --- | --- |
| `<h1>` – `<h6>` | `#` – `######` headings |
| `<p>` | Paragraph with trailing newlines |
| `<strong>`, `<b>` | `**bold**` |
| `<em>`, `<i>` | `*italic*` |
| `<code>` | `` `inline code` `` |
| `<pre>` + `<code>` | Fenced code block (` ``` `) |
| `<a href="">` | `[text](url)` |
| `<img>` | `![alt](src)` |
| `<ul>`, `<ol>`, `<li>` | Unordered / ordered lists |
| `<blockquote>` | `> blockquote` |
| `<br>` | Line break |
| `<hr>` | `---` horizontal rule |
| `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | GFM table |

Any unrecognized elements (e.g. `<div>`, `<span>`, `<section>`) render their children as-is, acting as transparent wrappers.

## How It Works

1. **Custom React Reconciler** — Uses `react-reconciler` to build a lightweight tree of `MarkdownNode` objects from your React element tree.
2. **SSR-like Hook Behavior** — Client-side effects (`useEffect`, `useLayoutEffect`, `useInsertionEffect`) are intercepted and turned into no-ops, matching React's Fizz server renderer behavior. This ensures browser-only code (e.g. `document`, `window`) in effects never runs.
3. **Tree-to-Markdown Serialization** — The `MarkdownNode` tree is serialized to a Markdown string via a recursive `toMarkdown` function.

## Requirements

```json
{
  "react": ">=19.0.0",
  "react-reconciler": "^0.33.0"
}
```

> **Note:** React 19 or above is required. The effect-interception mechanism relies on React 19's internal hooks dispatcher (`__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H`).

## Used By

- [**Rspress SSG-MD**](https://rspress.rs/guide/basic/ssg-md) — Rspress uses this library to power its SSG-MD (Static Site Generation to Markdown) feature. SSG-MD renders documentation pages as Markdown files instead of HTML, generating `llms.txt` and `llms-full.txt` for [Generative Engine Optimization (GEO)](https://en.wikipedia.org/wiki/Generative_engine_optimization), enabling better accessibility for AI agents and large language models.

## License

[MIT](./LICENSE)
