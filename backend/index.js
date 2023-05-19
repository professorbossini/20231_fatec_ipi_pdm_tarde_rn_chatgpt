require('dotenv').config()
const express = require('express')
const { Configuration, OpenAIApi } = require ('openai')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);

const app = express()
app.use(express.json())

app.post('/sentimentos', (req, res) => {
  openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Qual o sentimento deste texto usando apenas uma palavra (Positivo, Negativo ou Neutro): ${req.body.texto}`,
    temperature: 0
  })
  .then(chatGPTResponse => {
    res.json({
      sentimento: chatGPTResponse.data.choices[0].text
    })
  })
})



const porta = process.env.PORT || 4000

app.listen(
  porta,
  () => console.log(`Servidor on. Porta: ${porta}`)
)