import Db from '../db/db'
import { ServerRoute } from 'hapi'

export const getOneById = (path: string, db: Db): ServerRoute => ({
  method: 'GET',
  path: `${path}/{id}`,
  handler: async (req, h) => {
    const { id } = req.params

    const instance = await db.getOneById(parseInt(id, 10))

    return h.response(instance).code(200)
  },
})
