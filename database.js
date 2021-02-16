
const pgp = require('pg-promise')({
  noWarnings:true
});

const user = 'postgres'
const password = 'gile1995'
const host = 'localhost'
const port = 5432
const database = 'db'

const db = pgp(`postgres://${user}:${password}@${host}:${port}/${database}`)

//export default db;
module.exports = db;