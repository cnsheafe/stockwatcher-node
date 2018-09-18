import { Pool } from 'pg'

/**
 * Create a pool to be shared across all database methods
 */
export const pool = new Pool({
  host: process.env.SW_DB_HOST,
  user: process.env.SW_DB_USER,
  database: process.env.SW_DB_NAME,
  password: process.env.SW_DB_PW,
  port: parseInt(process.env.SW_DB_PORT, 10),
})
