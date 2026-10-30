let mergeSourceMap = async (originalSourceMap, generatedSourceMap)=>{
    if (!originalSourceMap || !generatedSourceMap) return generatedSourceMap ?? originalSourceMap;
    let { default: remapping } = await import("./remapping.js");
    return remapping([
        generatedSourceMap,
        originalSourceMap
    ], ()=>null);
}, transformLoader = async function transform(source, map) {
    let callback = this.async(), bypass = ()=>{
        callback(null, source, map);
    }, { id: transformId, getEnvironment } = this.getOptions();
    if (!transformId) return void bypass();
    let transform = this._compiler?.__rsbuildTransformer?.[transformId];
    if (!transform) return void bypass();
    try {
        let result = await transform({
            code: source,
            context: this.context,
            resource: this.resource,
            resourcePath: this.resourcePath,
            resourceQuery: this.resourceQuery,
            environment: getEnvironment(),
            addDependency: this.addDependency.bind(this),
            addMissingDependency: this.addMissingDependency.bind(this),
            addContextDependency: this.addContextDependency.bind(this),
            emitFile: this.emitFile.bind(this),
            importModule: this.importModule.bind(this),
            resolve: this.resolve.bind(this)
        });
        if (null == result) return void bypass();
        if ('string' == typeof result || Buffer.isBuffer(result)) return void callback(null, result, map);
        let mergedMap = await mergeSourceMap(map, result.map);
        callback(null, result.code, mergedMap);
    } catch (error) {
        error instanceof Error ? callback(error) : callback(Error(String(error)));
    }
};
export default transformLoader;
