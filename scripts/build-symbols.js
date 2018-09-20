const fs = require('fs')
const path = require('path')
const { Pool } = require('pg')


const buildSymbols = async () => {
  const { DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_PW } = process.env

  const pool = new Pool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PW,
  })

  const regex = /"([^"]*)"/gm

  const companyCSV = fs.readFileSync(path.resolve(__dirname, '../data/companylist.csv'), {
    encoding: 'utf8',
  }).split('\n')
    .slice(1)
    .map(line => {
      const row = []

      for (let match = regex.exec(line); match !== null; match = regex.exec(line)) {
        if (match.index === regex.lastIndex) regex.lastIndex++
        row.push(match[1])
      }

      return row
    })


  const client = await pool.connect()

  try {
    companyCSV.forEach(async company => {
      const query = `
        INSERT INTO Symbols(symbol, company, sector, industry)
        VALUES($1, $2, $3, $4);
      `
      const symbol = company[0]
      const name = company[1]
      const sector = company[6]
      const industry = company[7]

      await client.query(query, [symbol, name, sector, industry])
    })   
  } catch (error) {
    console.log(error)
  } finally {
    client.release()
  }
}

buildSymbols()