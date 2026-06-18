import users from "../models/userModels.js"
import planoEstudo from "./planoEstudo.js"
import trilha from "./trilha.js"
import historicoAvaliacao from "./historicoAvaliacao.js"
import historicoChat from "./historicoChat.js"

users.hasMany(trilha,{
    foreignkeys:"userId",
})

trilha.belongsTo(users,{
    foreignkeys:"userId",
})

trilha.hasMany(planoEstudo,{
    foreignkeys:"trilhaId",
})

planoEstudo.belongsTo(trilha,{
    foreignKey:"trilhaId",
})

trilha.hasMany(historicoAvaliacao,{
    foreignKey:"trinhaId",
})

historicoAvaliacao.belongsTo(trilha,{
    foreignKey:"trilhaId"
})

users.hasMany(historicoChat,{
    foreignKey: "userId"
})


historicoChat.belongsTo(users,{
    foreignKey: "userId"
})

export{
    users,
    trilha,
    planoEstudo,
    historicoAvaliacao,
    historicoChat,
}