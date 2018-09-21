import { SymbolDb } from '../../db/symbol'
import { pool } from '../../db/pool'
import { getOneById } from '../route'
import { findBySymbol } from './symbol.find-by-symbol'
import { findByPhrase } from './symbol.find-by-phrase'

const PATH = '/symbols'
const db = new SymbolDb(pool)

export default [
  getOneById(PATH, db),
  findBySymbol(db),
  findByPhrase(db),
]
