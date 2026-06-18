import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const planoEstudo = sequelize.define('planoEstudo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.TEXT,
    },
    TempoEstimado:{
        type: DataTypes.FLOAT,
    },
    ordem:{
        type:DataTypes.INTEGER
    },
    progresso:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status:{
        type: DataTypes.ENUM,
        defaultValue: "NAO_INICIADO"
    }
})

export default planoEstudo