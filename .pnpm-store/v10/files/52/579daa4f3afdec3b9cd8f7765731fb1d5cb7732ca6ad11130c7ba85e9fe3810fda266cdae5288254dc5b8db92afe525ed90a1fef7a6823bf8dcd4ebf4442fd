# rspress-plugin-mermaid ![NPM Version](https://img.shields.io/npm/v/rspress-plugin-mermaid)

[简体中文](./README.zh-CN.md)

Rspress plugin to render [Mermaid](https://mermaid.js.org/#/) diagrams in markdown files.

Write mermaid as code blocks in markdown files and they will be rendered as SVGs:

````markdown
```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```
````

<div align="center">
  <img src="./image.png" alt="sample" width="400" height="560" />
</div>

## Usage

```bash
npm i rspress-plugin-mermaid
pnpm add rspress-plugin-mermaid
```

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [mermaid()],
});
```

## Configure

### mermaidConfig

Mermaid configuration options, will be passed to `mermaid.initialize` function. See [mermaid documentation](https://mermaid.js.org/config/schema-docs/config.html) for more details.

- Type: `object`

```ts
import * as path from 'path';
import { defineConfig } from 'rspress/config';
import mermaid from 'rspress-plugin-mermaid';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  plugins: [
    mermaid({
      mermaidConfig: {
        theme: 'forest',
      },
    }),
  ],
});
```
