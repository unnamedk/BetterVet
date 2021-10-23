import express from 'express';
import cors from 'cors'

const port = 3030;

async function init() {
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