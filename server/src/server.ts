import express from 'express'
import cors from 'cors'
import routes from './routes'

// instância dos métodos express colocados na variável app 
const app = express()
// Falar pro express entender completamente json
app.use(cors()) // pra conseguir acessar outras portas e se comunicar
app.use(express.json())
app.use(routes)

//Corpo (Request Body): Dados para criação ou atualização de um dado
//Route Params : Identificar qual recurso eu quero atualizar ou apagar
//Query Params : Paginação, filtros, ordenação
// porta que ouviremos
app.listen(3333);