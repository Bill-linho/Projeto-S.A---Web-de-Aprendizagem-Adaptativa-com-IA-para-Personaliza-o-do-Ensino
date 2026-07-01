import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const Mensagem = sequelize.define(
  "mensagem",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    conversaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    autor: {
      type: DataTypes.ENUM(
        "usuario",
        "gemini"
      ),
      allowNull: false
    },

    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
);