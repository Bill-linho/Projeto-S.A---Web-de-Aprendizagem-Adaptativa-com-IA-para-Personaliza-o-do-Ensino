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
        area: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        nivelAtual:{ 
            type:DataTypes.NUMBER,
            allowNull: false,
        },
        nivelObjetivo:{ 
            type:DataTypes.INTEGER,
            allowNull: false,
        },
    });