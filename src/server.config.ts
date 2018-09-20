import { Server } from 'hapi'
import symbols from './routes/symbol/symbol.index'

export async function configServer (server: Server) {
  // Register endpoints
  server.route(symbols)
}

