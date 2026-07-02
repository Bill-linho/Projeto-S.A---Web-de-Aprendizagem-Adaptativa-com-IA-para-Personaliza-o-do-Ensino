import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const trilha = sequelize.define('trilha',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nivelAtual: {
            type: DataTypes.ENUM(
                "INICIANTE",
                "INTERMEDIARIO",
                "AVANCADO"
            ),
            defaultValue: "INICIANTE",
            allowNull: false,
        },
        area: {
            type: DataTypes.ENUM(
                "LOGICA",
                "FRONT-END",
                "BACK-END"
            )

        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });