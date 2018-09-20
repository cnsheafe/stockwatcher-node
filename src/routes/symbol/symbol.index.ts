import { SymbolDb } from '../../db/symbol'
import { pool } from '../../db/pool'
import { getOneById } from '../route'

const PATH = '/symbols'
const db = new SymbolDb(pool)

export default [
  getOneById(PATH, db),
]
