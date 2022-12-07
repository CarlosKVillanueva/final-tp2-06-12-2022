import express from 'express'
import routers from './routers.js'

const app = express()

app.use(express.json())

app.use('/api/temperaturas', routers)


const puerto = 8080
const servidor = app.listen(puerto, () => {
    console.log(`conectado y escuchando en puerte ${puerto}`)
})