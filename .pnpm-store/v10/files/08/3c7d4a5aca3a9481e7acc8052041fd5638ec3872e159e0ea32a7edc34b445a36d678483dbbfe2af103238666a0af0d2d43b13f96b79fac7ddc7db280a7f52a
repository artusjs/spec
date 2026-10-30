import path from 'node:path';
import { RemarkCodeBlockToGlobalComponentPluginFactory, } from 'rspress-plugin-devkit';
export default function rspressPluginMermaid(options = {}) {
    const { mermaidConfig = {} } = options;
    const remarkMermaid = new RemarkCodeBlockToGlobalComponentPluginFactory({
        components: [
            {
                lang: 'mermaid',
                componentPath: path.join(__dirname, '../components', 'MermaidRender.tsx'),
                childrenProvider() {
                    return [];
                },
                propsProvider(code) {
                    return {
                        code,
                        config: mermaidConfig,
                    };
                },
            },
        ],
    });
    return {
        name: 'rspress-plugin-mermaid',
        // config not needed for Rspress V2
        markdown: {
            remarkPlugins: [remarkMermaid.remarkPlugin],
            globalComponents: remarkMermaid.mdxComponents,
        },
        builderConfig: remarkMermaid.builderConfig,
    };
}
