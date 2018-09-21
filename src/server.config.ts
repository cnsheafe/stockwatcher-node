import { Server } from 'hapi'
import symbols from './routes/symbol/symbol.index'
import prices from './routes/price/price.index'

export async function configServer (server: Server) {
  // Register endpoints
  server.route(symbols)
  server.route(prices)
}

