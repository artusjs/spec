import { RscClientPlugin, type RscClientPluginOptions } from './RscClientPlugin.js';
import { RscServerPlugin } from './RscServerPlugin.js';
declare class ServerPlugin extends RscServerPlugin {
    constructor(options?: Omit<RscClientPluginOptions, 'coordinator'>);
}
declare class ClientPlugin extends RscClientPlugin {
}
export declare const rsc: {
    createPlugins: () => {
        ServerPlugin: new (options?: Omit<RscClientPluginOptions, "coordinator">) => ServerPlugin;
        ClientPlugin: new () => ClientPlugin;
    };
    Layers: {
        /**
         * The layer for server-only runtime and picking up `react-server` export conditions.
         */
        readonly rsc: "react-server-components";
        /**
         * Server Side Rendering layer for app.
         */
        readonly ssr: "server-side-rendering";
    };
};
export {};
