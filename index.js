import sequelize from './src/config/database.js'
import express from 'express'

const app = express()


app.sequelize.sync({alter: true}).then(() => {
    app.listen(process.env.SERVE_PORT, () => {
        console.log(`Servidor rodando em: localhost:${process.env.SERVE_PORT}`)
    })
}).catch(error => console.log("Erro ao acessar API/SERVE", error))