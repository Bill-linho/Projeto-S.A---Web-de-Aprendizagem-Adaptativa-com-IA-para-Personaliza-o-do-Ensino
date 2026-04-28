import express from 'express'
import sequelize from './src/config/database.js'
import  router  from './src/routes/user.router.js'
import 'dotenv/config'

const app = express()
app.use(express.json());

app.use('/user', router)

sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.SERVE_PORT, () => {
        console.log(`Servidor rodando em: localhost:${process.env.SERVE_PORT}`)
    })
}).catch(error => console.log("Erro ao acessar API/SERVE", error))