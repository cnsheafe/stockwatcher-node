import { SymbolDb } from '../../db/symbol'
import { ServerRoute } from 'hapi'

export const findByPhrase = (db: SymbolDb): ServerRoute => ({
  method: 'GET',
  path: '/symbols/byPhrase',
  handler: async (req, h) => {
    const { phrase } = req.query as { phrase: string }

    if (!phrase) return h.response('Phrase query variable is required.').code(400)

    try {
      const companies = await db.findManyByPhrase(phrase)

      return h.response(companies).code(200)
    } catch (error) {
      // tslint:disable-next-line no-console
      console.log(error)

      return h.response('There was an error').code(500)
    }

  },
})
