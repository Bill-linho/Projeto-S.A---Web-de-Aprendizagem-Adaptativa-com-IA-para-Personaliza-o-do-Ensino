import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const historicoChat = sequelize.define(
    "historicoChat",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        pergunta: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        resposta: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        dataHora: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    }
);