import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const trilha = sequelize.define('trilha',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: { 
            type: DataTypes.STRING, 
            allowNull: false,
        },
        nivelAtual:{ 
            type:DataTypes.ENUM(
                "INICIANTE",
                "INTERMEDIARIO",
                "AVANCADO"
            ),
            defaultValue:"INICIANTE",
            allowNull: false,
        },
        nivelObjetivo:{ 
            type:DataTypes.ENUM(
                "INICIANTE",
                "INTERMEDIARIO",
                "AVANCADO"
            ),
            defaultValue:"INTERMEDIARIO",
            allowNull: false,
        },
    });