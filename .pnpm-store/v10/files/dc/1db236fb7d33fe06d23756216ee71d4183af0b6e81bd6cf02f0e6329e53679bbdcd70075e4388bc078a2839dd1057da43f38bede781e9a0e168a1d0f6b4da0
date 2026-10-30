# @rspack/plugin-react-refresh

<p>
  <a href="https://www.npmjs.com/package/@rspack/plugin-react-refresh?activeTab=readme"><img src="https://img.shields.io/npm/v/@rspack/plugin-react-refresh?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a>
  <a href="https://npmcharts.com/compare/@rspack/plugin-react-refresh?minimal=true"><img src="https://img.shields.io/npm/dm/@rspack/plugin-react-refresh.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
  <a href="https://github.com/web-infra-dev/rspack/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" /></a>
</p>

React refresh plugin for [Rspack](https://github.com/web-infra-dev/rspack).

## Installation

First you need to install this plugin and its dependencies:

```bash
npm add @rspack/plugin-react-refresh react-refresh -D
# or
yarn add @rspack/plugin-react-refresh react-refresh -D
# or
pnpm add @rspack/plugin-react-refresh react-refresh -D
# or
bun add @rspack/plugin-react-refresh react-refresh -D
```

## Import the plugin

Import the plugin in your code:

- ES modules:

```js
// Named import (recommended)
import { ReactRefreshRspackPlugin } from "@rspack/plugin-react-refresh";
```

- CommonJS:

```js
const ReactRefreshRspackPlugin = require("@rspack/plugin-react-refresh");
```

## Usage

Enabling [React Fast Refresh](https://reactnative.dev/docs/fast-refresh) functionality primarily involves two aspects: code injection and code transformation.

- Code injection will inject some code from the [react-refresh](https://www.npmjs.com/package/react-refresh) package, as well as some custom runtime code, all of which are integrated in this plugin and can be injected through.
- Code transformation can be added through loaders, such as [jsc.transform.react.refresh](https://swc.rs/docs/configuration/compilation#jsctransformreactrefresh) for [swc-loader](https://swc.rs/docs/usage/swc-loader) or the [react-refresh/babel](https://github.com/facebook/react/tree/main/packages/react-refresh) for [babel-loader](https://github.com/babel/babel-loader).

```js
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  experiments: {
    rspackFuture: {
      disableTransformByDefault: true,
    },
  },
  // ...
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  development: isDev,
                  refresh: isDev,
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [isDev && new ReactRefreshPlugin()].filter(Boolean),
};
```

Compared to the previous approach, this method decouples the React Fast Refresh code injection logic from the transformation logic. The code injection logic is handled uniformly by this plugin, while the code transformation is handled by loaders. This means that this plugin can be used in conjunction with `builtin:swc-loader`, `swc-loader`, or `babel-loader`.

## Example

- For usage with `builtin:swc-loader`, you can refer to the example at [examples/react-refresh](https://github.com/rstackjs/rspack-examples/tree/main/rspack/react-refresh/rspack.config.js), When using with `swc-loader`, simply replace `builtin:swc-loader` with `swc-loader`.
- For usage with `babel-loader`, you can refer to the example at [examples/react-refresh-babel-loader](https://github.com/rstackjs/rspack-examples/tree/main/rspack/react-refresh-babel-loader/rspack.config.js)

## Options

### test

- Type: [Rspack.RuleSetCondition](https://rspack.rs/config/module-rules#condition)
- Default: `undefined`

Specifies which files should be processed by the React Refresh loader. This option is passed to the `builtin:react-refresh-loader` as the `rule.test` condition.

Works identically to Rspack's [rule.test](https://rspack.rs/config/module-rules#rulestest) option.

```js
new ReactRefreshPlugin({
  test: [/\.jsx$/, /\.tsx$/],
});
```

### include

- Type: [Rspack.RuleSetCondition](https://rspack.rs/config/module-rules#condition)
- Default: `/\.([cm]js|[jt]sx?|flow)$/i`

Explicitly includes files to be processed by the React Refresh loader. This option is passed to the `builtin:react-refresh-loader` as the `rule.include` condition.

Use this to limit processing to specific directories or file patterns.

Works identically to Rspack's [rule.include](https://rspack.rs/config/module-rules#rulesinclude) option.

```js
new ReactRefreshPlugin({
  include: [/\.jsx$/, /\.tsx$/],
});
```

### exclude

- Type: [Rspack.RuleSetCondition](https://rspack.rs/config/module-rules#condition)
- Default: `/node_modules/`

Exclude files from being processed by the plugin. The value is the same as the [rule.exclude](https://rspack.rs/config/module-rules#rulesexclude) option in Rspack.

```js
new ReactRefreshPlugin({
  exclude: [/node_modules/, /some-other-module/],
});
```

### resourceQuery

- Type: [Rspack.RuleSetCondition](https://rspack.rs/config/module-rules#condition)
- Default: `undefined`

Can be used to exclude certain resources from being processed by the plugin by the resource query. The value is the same as the [rule.resourceQuery](https://rspack.rs/config/module-rules#rulesresourcequery) option in Rspack.

For example, to exclude all resources with the `raw` query, such as `import rawTs from './ReactComponent.ts?raw';`, use the following:

```js
new ReactRefreshPlugin({
  resourceQuery: { not: /raw/ },
});
```

### forceEnable

- Type: `boolean`
- Default: `false`

Whether to force enable the plugin.

By default, the plugin will not be enabled in non-development environments. If you want to force enable the plugin, you can set this option to `true`.

```js
new ReactRefreshPlugin({
  forceEnable: true,
});
```

It is useful if you want to:

- Use the plugin in production.
- Use the plugin with the `none` mode without setting `NODE_ENV`.
- Use the plugin in environments we do not support, such as `electron-prerender` (**WARNING: Proceed at your own risk**).

### library

- Type: `string`
- Default: `output.uniqueName || output.library`

Sets a namespace for the React Refresh runtime.

It is most useful when multiple instances of React Refresh is running together simultaneously.

### overlay

- Type: `boolean | OverlayOptions`
- Default: `false`

Modify the behavior of the error overlay.

Checkout [OverlayOptions](https://github.com/rstackjs/rspack-plugin-react-refresh/blob/main/src/options.ts#L4) type signature for more details.

- Enable the error overlay:

```js
new ReactRefreshPlugin({
  overlay: true,
});
```

- Configure the error overlay:

```js
new ReactRefreshPlugin({
  overlay: {
    // ...
  },
});
```

### reloadOnRuntimeErrors

- Type: `boolean`
- Default: `false`

Config the plugin whether trigger a full page reload when an unrecoverable runtime error is encountered.

Currently, only module factory undefined error is considered as unrecoverable runtime error.

```js
new ReactRefreshPlugin({
  reloadOnRuntimeErrors: true,
});
```

### reactRefreshLoader

- Type: `string`
- Default: `builtin:react-refresh-loader`

Be default, the plugin uses `builtin:react-refresh-loader` loader implementation [from Rspack](https://github.com/web-infra-dev/rspack/tree/main/crates/rspack_loader_react_refresh) in order ot inject
the React Refresh utilities into each module. `reactRefreshLoader` option allows to specify the loader, that implements 
custom React Refresh instrumentation if needed.

```js
new ReactRefreshPlugin({
    reactRefreshLoader: 'my-advanced-react-refresh-loader',
});
```

## Credits

Thanks to the [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) created by [@pmmmwh](https://github.com/pmmmwh), which inspires implement this plugin.

## License

`@rspack/plugin-react-refresh` is [MIT licensed](https://github.com/web-infra-dev/rspack/blob/main/LICENSE).
