import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const trilha = sequelize.define('trilha',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        area: DataTypes.STRING,
        nivelAtual: DataTypes.INTEGER,
        nivelObjetivo: DataTypes.INTEGER,
        status: DataTypes.STRING,

        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuarios',
                key: 'id'
            }
        }

    });

Usuario.hasMany(trilha, {
    foreignKey: 'usuarioId'
})

Competencia.belongsTo(users, {
    foreignKey: 'usuarioId'
})