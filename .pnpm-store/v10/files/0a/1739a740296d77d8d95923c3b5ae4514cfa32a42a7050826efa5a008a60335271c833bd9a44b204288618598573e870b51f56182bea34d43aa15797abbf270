import { compileWithCrossCompilerCache, compile } from "./processor.js";
async function mdxLoader(source) {
    this.cacheable(true);
    const callback = this.async();
    const options = this.getOptions();
    const filepath = this.resourcePath;
    const { config, docDirectory, routeService, pluginDriver, isSsgMd = false } = options;
    const crossCompilerCache = config?.markdown?.crossCompilerCache ?? true;
    try {
        if (crossCompilerCache && 'production' === process.env.NODE_ENV && !isSsgMd) {
            const compileResult = await compileWithCrossCompilerCache({
                source,
                filepath,
                docDirectory,
                config,
                pluginDriver,
                routeService,
                addDependency: this.addDependency
            });
            callback(null, compileResult);
        } else {
            const compileResult = await compile({
                source,
                filepath,
                docDirectory,
                config,
                pluginDriver,
                routeService,
                addDependency: this.addDependency,
                isSsgMd
            });
            callback(null, compileResult);
        }
    } catch (e) {
        if (e instanceof Error) {
            const message = `MDX compile error: ${e.message} in ${filepath}`;
            let stack = e.stack;
            if (stack) {
                const stackLines = stack.split('\n');
                if (stackLines.length > 10) stack = `${stackLines.slice(0, 10).join('\n')}\n    ... (truncated)`;
            }
            callback({
                message,
                ...stack ? {
                    stack
                } : {},
                name: e.name,
                cause: e.cause
            });
        }
    }
}
export default mdxLoader;
