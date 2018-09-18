import { Pool } from 'pg'

export class SubscriptionDb {
  constructor (pool: Pool) {
    this.pool = pool
  }

  private pool: Pool

  async getOneById (id: number) {
    const { rows } = await this.pool.query('SELECT * FROM Subscriptions where id=$1', [id])

    if (rows.length < 1) throw Error('no entry found')

    return rows[0]
  }
}
