module.exports = {
  type: 'mysql',
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  synchronize: true,
  database: process.env.DBDATABASE
}
