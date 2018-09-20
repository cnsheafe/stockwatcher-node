import { ServerRoute } from 'hapi'
import { SymbolDb } from '../../db/symbol'

export const findBySymbol = (db: SymbolDb): ServerRoute => ({
  method: 'GET',
  path: '/symbols/bySymbol',
  handler: async (req, h) => {
    let { symbols } = req.query as { symbols: string | string[] }

    if (!symbols) return h.response('Symbol query variable required.').code(400)

    if (!Array.isArray(symbols)) symbols = [symbols]

    symbols = symbols.map((sym) => sym.toUpperCase())
    try {
      const companies = await db.findManyBySymbols(symbols)

      return h.response(companies).code(200)
    } catch (error) {
      console.log(error)

      return h.response(error.message).code(500)
    }
  },
})
