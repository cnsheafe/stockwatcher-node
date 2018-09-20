import { Pool } from 'pg'

/**
 * Base class for all Models
 */
export default abstract class Db {
  constructor (pool: Pool) {
    this.pool = pool
  }
  protected pool: Pool

  abstract async getOneById (id: number): Promise<any[]>

  protected checkForError (rows: any[]) {
    if (rows.length < 1) throw Error('No entry found.')
  }
}
