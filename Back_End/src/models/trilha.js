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
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });