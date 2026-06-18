import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const historicoChat = sequelize.define('historicoChat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pergunta:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    resposta:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dataHora:{
        type: DataTypes.DATA,
        defaultValue: DataTypes.NOW,
    },
})

export default historicoChat