import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const Conversa = sequelize.define(
  "conversa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
);