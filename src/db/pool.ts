import { Pool } from 'pg'

/**
 * Create a pool to be shared across all database methods
 */
export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: parseInt(process.env.DB_PORT, 10),
})
