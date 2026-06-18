import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const historicoAvaliacao = sequelize.define("historicoAvaliacao",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pontuacao:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    nivelAnterior:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    nivelAtual:{
        type: DataTypes.STRING,
        allowNull:true
    },
    dataAvaliacao:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

export default historicoAvaliacao