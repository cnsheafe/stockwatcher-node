import Db from './db'

export class SymbolDb extends Db {
  async getOneById (id: number) {
    const { rows } = await this.pool.query('SELECT * FROM Symbols where id=$1', [id])

    if (rows.length < 1) throw Error('no entry found')

    return rows[0]
  }
}
