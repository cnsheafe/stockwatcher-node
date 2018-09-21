import Db from './db'
import { sanitizeLike } from '../util/util.sanitize-like'

export class SymbolDb extends Db {
  async getOneById (id: number) {
    const { rows } = await this.pool.query('SELECT * FROM Symbols where id=$1', [id])

    this.checkForError(rows)

    return rows[0]
  }

  async findManyBySymbols (symbols: string[]) {
    const len = symbols.length - 1

    const where = symbols.reduce((acc, _, i) => {
      return i < len
        ? `${acc} symbol=$${i + 1} OR`
        : `${acc} symbol=$${i + 1}`
    }, 'where')

    const { rows } = await this.pool.query(`SELECT * FROM Symbols ${where}`, symbols)

    this.checkForError(rows)

    return rows
  }

  async findManyByPhrase (phrase: string) {
    const { rows } = await this.pool.query(
      'SELECT * FROM Symbols where company ILIKE $1',
      [`%${sanitizeLike(phrase)}%`]
    )

    this.checkForError(rows)

    return rows
  }
}
