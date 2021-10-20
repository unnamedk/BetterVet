const express = require('express')

const app = express()
const port = 3030;

app.get('/', (req, res) => {
    res.send('<h2>página inicial<h2>')
})

app.listen(port, () => {
    console.log(`Iniciando página no endereço http://localhost:${port}`)
})