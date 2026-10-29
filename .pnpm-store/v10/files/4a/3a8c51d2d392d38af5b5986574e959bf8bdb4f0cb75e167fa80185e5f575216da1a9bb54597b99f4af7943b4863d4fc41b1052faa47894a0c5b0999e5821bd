import {
  Configuration,
  Compiler,
  RuleSetRule,
  ResolveOptions,
} from '@rspack/core';
import * as https from 'https';

export default Config;

// The compiler type of Rspack / webpack are mismatch,
// so we use a loose type here to allow using webpack plugins.
interface PluginInstance {
  apply: (compiler: any) => void;
  [index: string]: any;
}

declare namespace __Config {
  class Chained<Parent> {
    batch(handler: (chained: this) => void): this;
    end(): Parent;
  }
  class TypedChainedMap<Parent, OptionsType> extends Chained<Parent> {
    clear(): this;
    delete(key: string): this;
    has(key: string): boolean;
    get<T extends keyof OptionsType>(key: T): OptionsType[T];
    getOrCompute<T extends keyof OptionsType>(
      key: T,
      compute: () => OptionsType[T],
    ): OptionsType[T];
    set<T extends keyof OptionsType>(key: T, value: OptionsType[T]): this;
    merge(obj: Partial<OptionsType>): this;
    entries(): OptionsType;
    values<T extends keyof OptionsType>(): OptionsType[T][];
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void,
    ): this;
  }

  class ChainedMap<Parent> extends TypedChainedMap<Parent, any> {}
  class TypedChainedSet<Parent, Value> extends Chained<Parent> {
    add(value: Value): this;
    prepend(value: Value): this;
    clear(): this;
    delete(key: string): this;
    has(key: string): boolean;
    merge(arr: Value[]): this;
    values(): Value[];
    when(
      condition: boolean,
      trueBrancher: (obj: this) => void,
      falseBrancher?: (obj: this) => void,
    ): this;
  }

  class ChainedSet<Parent> extends TypedChainedSet<Parent, any> {}
}

type RspackConfig = Required<Configuration>;
declare class Config extends __Config.ChainedMap<void> {
  entryPoints: Config.TypedChainedMap<
    Config,
    { [key: string]: Config.EntryPoint }
  >;
  output: Config.Output;
  module: Config.Module;
  node: Config.ChainedMap<this> & ((value: boolean) => this);
  optimization: Config.Optimization;
  performance: Config.Performance & ((value: boolean) => this);
  plugins: Config.Plugins<this, PluginInstance>;
  resolve: Config.Resolve;
  resolveLoader: Config.ResolveLoader;
  devServer: Config.DevServer;

  context(value: RspackConfig['context']): this;
  mode(value: RspackConfig['mode']): this;
  devtool(value: Config.DevTool): this;
  target(value: RspackConfig['target']): this;
  watch(value: RspackConfig['watch']): this;
  watchOptions(value: RspackConfig['watchOptions']): this;
  externals(value: RspackConfig['externals']): this;
  externalsType(value: RspackConfig['externalsType']): this;
  externalsPresets(value: RspackConfig['externalsPresets']): this;
  stats(value: RspackConfig['stats']): this;
  experiments(value: RspackConfig['experiments']): this;
  amd(value: RspackConfig['amd']): this;
  bail(value: RspackConfig['bail']): this;
  cache(value: RspackConfig['cache']): this;
  dependencies(value: RspackConfig['dependencies']): this;
  ignoreWarnings(value: RspackConfig['ignoreWarnings']): this;
  loader(value: RspackConfig['loader']): this;
  name(value: RspackConfig['name']): this;
  infrastructureLogging(value: RspackConfig['infrastructureLogging']): this;
  snapshot(value: RspackConfig['snapshot']): this;
  lazyCompilation(value: RspackConfig['lazyCompilation']): this;

  entry(name: string): Config.EntryPoint;
  plugin(name: string): Config.Plugin<this, PluginInstance>;

  toConfig(): Configuration;

  static toString(
    config: any,
    {
      verbose,
      configPrefix,
    }?: {
      verbose?: boolean | undefined;
      configPrefix?: string | undefined;
    },
  ): string;
}

declare namespace Config {
  class Chained<Parent> extends __Config.Chained<Parent> {}
  class TypedChainedMap<Parent, OptionsType> extends __Config.TypedChainedMap<
    Parent,
    OptionsType
  > {}
  class ChainedMap<Parent> extends __Config.TypedChainedMap<Parent, any> {}
  class TypedChainedSet<Parent, Value> extends __Config.TypedChainedSet<
    Parent,
    Value
  > {}
  class ChainedSet<Parent> extends __Config.TypedChainedSet<Parent, any> {}

  class Plugins<
    Parent,
    PluginType extends PluginInstance,
  > extends TypedChainedMap<
    Parent,
    { [key: string]: Plugin<Parent, PluginType> }
  > {}

  class Plugin<Parent, PluginType extends PluginInstance>
    extends ChainedMap<Parent>
    implements Orderable
  {
    init<P extends PluginType | PluginClass<PluginType>>(
      value: (
        plugin: P,
        args: P extends PluginClass<PluginType>
          ? ConstructorParameters<P>
          : any[],
      ) => PluginType,
    ): this;
    use<P extends string | PluginType | PluginClass<PluginType>>(
      plugin: P,
      args?: P extends PluginClass<PluginType>
        ? ConstructorParameters<P>
        : any[],
    ): this;
    tap<P extends PluginClass<PluginType>>(
      f: (args: ConstructorParameters<P>) => ConstructorParameters<P>,
    ): this;

    // Orderable
    before(name: string): this;
    after(name: string): this;
  }

  type RspackEntry = NonNullable<Configuration['entry']>;

  type RspackEntryObject = Exclude<
    RspackEntry,
    string | string[] | Function
  >[string];

  class EntryPoint extends TypedChainedSet<Config, RspackEntryObject> {}

  type RspackModule = Required<NonNullable<Configuration['module']>>;

  class Module extends ChainedMap<Config> {
    rules: TypedChainedMap<this, { [key: string]: Rule }>;
    generator: ChainedMap<this>;
    parser: ChainedMap<this>;
    rule(name: string): Rule;
    noParse(value: RspackModule['noParse']): this;
  }

  type RspackOutput = Required<NonNullable<Configuration['output']>>;

  class Output extends ChainedMap<Config> {
    assetModuleFilename(value: RspackOutput['assetModuleFilename']): this;
    bundlerInfo(value: RspackOutput['bundlerInfo']): this;
    chunkFilename(value: RspackOutput['chunkFilename']): this;
    chunkLoadTimeout(value: RspackOutput['chunkLoadTimeout']): this;
    chunkLoadingGlobal(value: RspackOutput['chunkLoadingGlobal']): this;
    chunkLoading(value: RspackOutput['chunkLoading']): this;
    chunkFormat(value: RspackOutput['chunkFormat']): this;
    crossOriginLoading(value: RspackOutput['crossOriginLoading']): this;
    devtoolFallbackModuleFilenameTemplate(
      value: RspackOutput['devtoolFallbackModuleFilenameTemplate'],
    ): this;
    devtoolModuleFilenameTemplate(
      value: RspackOutput['devtoolModuleFilenameTemplate'],
    ): this;
    devtoolNamespace(value: RspackOutput['devtoolNamespace']): this;
    enabledChunkLoadingTypes(
      value: RspackOutput['enabledChunkLoadingTypes'],
    ): this;
    filename(value: RspackOutput['filename']): this;
    globalObject(value: RspackOutput['globalObject']): this;
    uniqueName(value: RspackOutput['uniqueName']): this;
    hashDigest(value: RspackOutput['hashDigest']): this;
    hashDigestLength(value: RspackOutput['hashDigestLength']): this;
    hashFunction(value: RspackOutput['hashFunction']): this;
    hashSalt(value: RspackOutput['hashSalt']): this;
    hotUpdateChunkFilename(value: RspackOutput['hotUpdateChunkFilename']): this;
    hotUpdateGlobal(value: RspackOutput['hotUpdateGlobal']): this;
    hotUpdateMainFilename(value: RspackOutput['hotUpdateMainFilename']): this;
    library(value: RspackOutput['library']): this;
    importFunctionName(value: RspackOutput['importFunctionName']): this;
    path(value: RspackOutput['path']): this;
    pathinfo(value: RspackOutput['pathinfo']): this;
    publicPath(value: RspackOutput['publicPath']): this;
    scriptType(value: RspackOutput['scriptType']): this;
    sourceMapFilename(value: RspackOutput['sourceMapFilename']): this;
    strictModuleErrorHandling(
      value: RspackOutput['strictModuleErrorHandling'],
    ): this;
    strictModuleExceptionHandling(
      value: RspackOutput['strictModuleExceptionHandling'],
    ): this;
    workerChunkLoading(value: RspackOutput['workerChunkLoading']): this;
    enabledLibraryTypes(value: RspackOutput['enabledLibraryTypes']): this;
    environment(value: RspackOutput['environment']): this;
    compareBeforeEmit(value: RspackOutput['compareBeforeEmit']): this;
    wasmLoading(value: RspackOutput['wasmLoading']): this;
    webassemblyModuleFilename(
      value: RspackOutput['webassemblyModuleFilename'],
    ): this;
    enabledWasmLoadingTypes(
      value: RspackOutput['enabledWasmLoadingTypes'],
    ): this;
    iife(value: RspackOutput['iife']): this;
    module(value: RspackOutput['module']): this;
    clean(value: RspackOutput['clean']): this;
  }

  // await for @types/webpack-dev-server update do v4 to remove all any
  class DevServer extends ChainedMap<Config> {
    allowedHosts: TypedChainedSet<this, string>;
    after(value: (app: any, server: any, compiler: Compiler) => void): this;
    before(value: (app: any, server: any, compiler: Compiler) => void): this;
    bonjour(value: boolean): this;
    clientLogLevel(
      value:
        | 'silent'
        | 'trace'
        | 'debug'
        | 'info'
        | 'warn'
        | 'error'
        | 'none'
        | 'warning',
    ): this;
    compress(value: boolean): this;
    contentBase(value: boolean | string | string[]): this;
    contentBasePublicPath(value: string): this;
    disableHostCheck(value: boolean): this;
    filename(value: string): this;
    headers(value: { [header: string]: string }): this;
    historyApiFallback(value: boolean | any): this;
    host(value: string): this;
    hot(value: boolean): this;
    hotOnly(value: boolean): this;
    http2(value: boolean): this;
    https(value: boolean | https.ServerOptions): this;
    index(value: string): this;
    injectClient(value: boolean | ((compiler: Compiler) => boolean)): this;
    injectHot(value: boolean | ((compiler: Compiler) => boolean)): this;
    inline(value: boolean): this;
    lazy(value: boolean): this;
    liveReload(value: boolean): this;
    mimeTypes(value: Object): this;
    noInfo(value: boolean): this;
    onListening(value: (server: any) => void): this;
    open(value: boolean): this;
    openPage(value: string | string[]): this;
    overlay(value: boolean | { warnings?: boolean; errors?: boolean }): this;
    pfx(value: string): this;
    pfxPassphrase(value: string): this;
    port(value: number): this;
    progress(value: boolean): this;
    proxy(value: any): this;
    public(value: string): this;
    publicPath(publicPath: string): this;
    quiet(value: boolean): this;
    serveIndex(value: boolean): this;
    setup(value: (expressApp: any) => void): this;
    socket(value: string): this;
    sockHost(value: string): this;
    sockPath(value: string): this;
    sockPort(value: number): this;
    staticOptions(value: any): this;
    stats(value: Configuration['stats']): this;
    stdin(value: boolean): this;
    transportMode(
      value:
        | 'sockjs'
        | 'ws'
        | {
            server: 'ws';
            client: object;
          }
        | {
            client: 'sockjs';
            server: object;
          }
        | {
            client: object;
            server: object;
          },
    ): this;
    useLocalIp(value: boolean): this;
    watchContentBase(value: boolean): this;
    watchOptions(value: Configuration['watchOptions']): this;
    writeToDisk(value: boolean): this;
  }

  type RspackPerformance = Exclude<
    Required<NonNullable<Configuration['performance']>>,
    false
  >;
  class Performance extends ChainedMap<Config> {
    hints(value: RspackPerformance['hints']): this;
    maxEntrypointSize(value: RspackPerformance['maxEntrypointSize']): this;
    maxAssetSize(value: RspackPerformance['maxAssetSize']): this;
    assetFilter(value: RspackPerformance['assetFilter']): this;
  }

  type RspackResolve = Required<NonNullable<Configuration['resolve']>>;
  class Resolve<T = Config> extends ChainedMap<T> {
    alias: TypedChainedMap<this, { [key: string]: string | false | string[] }>;
    aliasFields: TypedChainedSet<this, RspackResolve['aliasFields'][number]>;
    conditionNames: TypedChainedSet<
      this,
      RspackResolve['conditionNames'][number]
    >;
    descriptionFiles: TypedChainedSet<
      this,
      RspackResolve['descriptionFiles'][number]
    >;
    extensions: TypedChainedSet<this, RspackResolve['extensions'][number]>;
    extensionAlias: TypedChainedMap<this, RspackResolve['extensionAlias']>;
    mainFields: TypedChainedSet<this, RspackResolve['mainFields'][number]>;
    mainFiles: TypedChainedSet<this, RspackResolve['mainFiles'][number]>;
    exportsFields: TypedChainedSet<
      this,
      RspackResolve['exportsFields'][number]
    >;
    importsFields: TypedChainedSet<
      this,
      RspackResolve['importsFields'][number]
    >;
    restrictions: TypedChainedSet<this, RspackResolve['restrictions'][number]>;
    roots: TypedChainedSet<this, RspackResolve['roots'][number]>;
    modules: TypedChainedSet<this, RspackResolve['modules'][number]>;
    fallback: TypedChainedMap<
      this,
      { [key: string]: string | false | string[] }
    >;
    byDependency: TypedChainedMap<this, RspackResolve['byDependency']>;
    enforceExtension(value: RspackResolve['enforceExtension']): this;
    symlinks(value: RspackResolve['symlinks']): this;
    preferRelative(value: RspackResolve['preferRelative']): this;
    preferAbsolute(value: RspackResolve['preferAbsolute']): this;

    tsConfig(value: RspackResolve['tsConfig']): this;
  }

  class RuleResolve<T = Config> extends Resolve<T> {
    fullySpecified(value: boolean): this;
  }

  class ResolveLoader extends Resolve {
    modules: ChainedSet<this>;
    moduleExtensions: ChainedSet<this>;
    packageMains: ChainedSet<this>;
  }

  type RspackRuleSet = Required<RuleSetRule>;

  class Rule<T = Module> extends ChainedMap<T> implements Orderable {
    uses: TypedChainedMap<this, { [key: string]: Use }>;
    include: TypedChainedSet<this, RspackRuleSet['include']>;
    exclude: TypedChainedSet<this, RspackRuleSet['exclude']>;
    rules: TypedChainedMap<this, { [key: string]: Rule<Rule> }>;
    oneOfs: TypedChainedMap<this, { [key: string]: Rule<Rule> }>;
    resolve: RuleResolve<Rule<T>>;

    dependency(value: RspackRuleSet['dependency']): this;
    enforce(value: RspackRuleSet['enforce']): this;
    issuer(value: RspackRuleSet['issuer']): this;
    issuerLayer(value: RspackRuleSet['issuerLayer']): this;
    layer(value: RspackRuleSet['layer']): this;
    mimetype(value: RspackRuleSet['mimetype']): this;
    parser(value: RspackRuleSet['parser']): this;
    generator(value: RspackRuleSet['generator']): this;
    resource(value: RspackRuleSet['resource']): this;
    resourceFragment(value: RspackRuleSet['resourceFragment']): this;
    resourceQuery(value: RspackRuleSet['resourceQuery']): this;
    sideEffects(value: RspackRuleSet['sideEffects']): this;
    with(value: RspackRuleSet['with']): this;
    test(value: RspackRuleSet['test']): this;
    type(value: RspackRuleSet['type']): this;

    use(name: string): Use<this>;
    rule(name: string): Rule<Rule>;
    oneOf(name: string): Rule<Rule>;
    pre(): this;
    post(): this;
    before(name: string): this;
    after(name: string): this;
  }

  type RspackOptimization = Required<
    NonNullable<Configuration['optimization']>
  >;
  type SplitChunksObject = Exclude<RspackOptimization['splitChunks'], false>;
  class Optimization extends ChainedMap<Config> {
    minimizer(name: string): Config.Plugin<this, PluginInstance>;
    minimizers: TypedChainedMap<this, Config.Plugin<this, PluginInstance>>;
    splitChunks: TypedChainedMap<this, SplitChunksObject> &
      ((value: SplitChunksObject | false) => this);

    minimize(value: RspackOptimization['minimize']): this;
    runtimeChunk(value: RspackOptimization['runtimeChunk']): this;
    emitOnErrors(value: RspackOptimization['emitOnErrors']): this;
    moduleIds(value: RspackOptimization['moduleIds']): this;
    chunkIds(value: RspackOptimization['chunkIds']): this;
    nodeEnv(value: RspackOptimization['nodeEnv']): this;
    removeEmptyChunks(value: RspackOptimization['removeEmptyChunks']): this;
    mergeDuplicateChunks(
      value: RspackOptimization['mergeDuplicateChunks'],
    ): this;
    providedExports(value: RspackOptimization['providedExports']): this;
    usedExports(value: RspackOptimization['usedExports']): this;
    concatenateModules(value: RspackOptimization['concatenateModules']): this;
    sideEffects(value: RspackOptimization['sideEffects']): this;
    mangleExports(value: RspackOptimization['mangleExports']): this;
    innerGraph(value: RspackOptimization['innerGraph']): this;
    realContentHash(value: RspackOptimization['realContentHash']): this;
    avoidEntryIife(value: RspackOptimization['avoidEntryIife']): this;
    inlineExports(value: RspackOptimization['inlineExports']): this;
  }

  interface RuntimeChunk {
    name: string | RuntimeChunkFunction;
  }

  type RuntimeChunkFunction = (entryPoint: EntryPoint) => string;

  interface SplitChunksOptions {
    [name: string]: any;
  }

  interface LoaderOptions {
    [name: string]: any;
  }

  class Use<Parent = Rule> extends ChainedMap<Parent> implements Orderable {
    loader(value: string): this;
    options(value: LoaderOptions): this;
    parallel(value: boolean): this;

    tap(f: (options: LoaderOptions) => LoaderOptions): this;

    // Orderable
    before(name: string): this;
    after(name: string): this;
  }

  // [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map[-debugids].
  export type DevTool = RspackConfig['devtool'];

  interface PluginClass<PluginType extends PluginInstance> {
    new (...opts: any[]): PluginType;
  }

  interface Orderable {
    before(name: string): this;
    after(name: string): this;
  }
}
