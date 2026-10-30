import { uniqArray } from '../Utils/uniqArray';
export class RemarkPluginFactoryBase {
    constructor(baseOptions) {
        this.baseOptions = baseOptions;
    }
    get mdxComponents() {
        return uniqArray(this.baseOptions.components.map(({ componentPath }) => componentPath));
    }
    get builderConfig() {
        return {
            tools: {
                bundlerChain(chain) {
                    chain.module
                        .rule('Raw')
                        .resourceQuery(/raw/)
                        .type('asset/source')
                        .end();
                    chain.resolve.extensions.prepend('.md').prepend('.mdx');
                },
            },
        };
    }
}
