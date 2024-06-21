import { Server } from 'http';
import { WebSocket, WebSocketServer } from 'ws'

interface Options {
    server?: Server,
    path?: string
}

export class WssService {

    private static _instance: WssService
    private wss: WebSocketServer;

    private constructor(options: Options) {
        const { server, path = '/ws' } = options

        this.wss = new WebSocketServer({ server, path })
        this.start()
    }

    static get instance(): WssService {
        if (!WssService._instance) {
            throw 'La Clase no esra inicializada'
        }

        return WssService._instance
    }

    static iniWss(options: Options) {
        WssService._instance = new WssService(options)
    }

    public start() {
        this.wss.on('connection', (ws: WebSocket) => {
            ws.on('close', () => console.log('Cliente desconectado'))
        })
    }
}