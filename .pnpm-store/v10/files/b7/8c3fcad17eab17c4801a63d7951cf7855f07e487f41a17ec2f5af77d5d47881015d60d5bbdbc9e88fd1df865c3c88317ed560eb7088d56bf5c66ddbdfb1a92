export class PresetConfigMutator {
    constructor(config, utils) {
        this.config = config;
        this.utils = utils;
    }
    toConfig() {
        return this.config;
    }
    addPlugins(...plugins) {
        if (!this.utils) {
            throw new Error('PluginConfigUtils not provided.');
        }
        plugins.forEach((plugin) => {
            this.utils.addPlugin(plugin);
        });
        return this;
    }
}
