export interface WDSMetaObj {
    enforceWs?: boolean;
    version?: number;
}
declare class WebSocketClient {
    client: WebSocket;
    constructor(url: string);
    onOpen(f: (...args: unknown[]) => void): void;
    onClose(f: (...args: unknown[]) => void): void;
    onMessage(f: (...args: unknown[]) => void): void;
}
export interface SocketClient {
    new (url: string): WebSocketClient;
}
export default function getWDSMetadata(SocketClient: SocketClient): WDSMetaObj;
export {};
