import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { createConnection } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT

async function init () {
  await createConnection()

  const app = express()
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.send('<h2>página inicial<h2>')
  })

  app.listen(port, () => {
    console.log(`Iniciando página no endereço http://localhost:${port}`)
  })
}

init()
