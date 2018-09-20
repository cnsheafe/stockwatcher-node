import { SymbolDb } from '../../db/symbol'
import { pool } from '../../db/pool'
import { getOneById } from '../route'
import { findBySymbol } from './symbol.find-by-symbol'

const PATH = '/symbols'
const db = new SymbolDb(pool)

export default [
  getOneById(PATH, db),
  findBySymbol(db),
]
