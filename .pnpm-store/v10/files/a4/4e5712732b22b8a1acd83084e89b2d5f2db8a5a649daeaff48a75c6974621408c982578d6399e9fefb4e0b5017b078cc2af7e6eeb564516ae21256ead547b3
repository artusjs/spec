import { EventEmitter } from 'node:events';
import * as http from 'node:http';
import { ListenOptions } from 'node:net';

/*!
 * connect
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * Copyright(c) 2025 Rstackjs
 * MIT Licensed
 */

/**
 * Public and internal Connect types.
 */
interface IncomingMessage extends http.IncomingMessage {
    originalUrl?: http.IncomingMessage['url'] | undefined;
}
type NextFunction = (err?: any) => void;
type SimpleHandleFunction = (req: IncomingMessage, res: http.ServerResponse) => void;
type NextHandleFunction = (req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
type ErrorHandleFunction = (err: any, req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
type HandleFunction = SimpleHandleFunction | NextHandleFunction | ErrorHandleFunction;
type ServerHandle = HandleFunction | http.Server;
interface ServerStackItem {
    route: string;
    handle: ServerHandle;
}
interface Server extends EventEmitter {
    (req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void;
    route: string;
    stack: ServerStackItem[];
    handle(req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void;
    use(fn: NextHandleFunction): Server;
    use(fn: HandleFunction): Server;
    use(fn: http.Server): Server;
    use(route: string, fn: NextHandleFunction): Server;
    use(route: string, fn: HandleFunction): Server;
    use(route: string, fn: http.Server): Server;
    listen(port: number, hostname?: string, backlog?: number, callback?: Function): http.Server;
    listen(port: number, hostname?: string, callback?: Function): http.Server;
    listen(path: string, callback?: Function): http.Server;
    listen(options: ListenOptions, callback?: Function): http.Server;
    listen(handle: unknown, listeningListener?: Function): http.Server;
}
/**
 * Create a new connect server.
 *
 * @return {function}
 * @public
 */
declare function connect(): Server;

export { connect };
export type { ErrorHandleFunction, HandleFunction, IncomingMessage, NextFunction, NextHandleFunction, Server, ServerHandle, ServerStackItem, SimpleHandleFunction };
