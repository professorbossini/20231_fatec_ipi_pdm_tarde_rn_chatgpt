require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const porta = process.env.PORT || 4000

app.listen(
  porta,
  () => console.log(`Servidor on. Porta: ${porta}`)
)