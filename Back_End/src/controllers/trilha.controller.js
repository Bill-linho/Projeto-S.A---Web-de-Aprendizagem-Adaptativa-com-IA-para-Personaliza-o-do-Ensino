import { where } from "sequelize";
import { trilha } from "../models/index.js";

export async function criarTrilha(req, res) {
    try {
        const trilhas = await trilha.create({
            nome: req.body.nome,
            nivelAtual: req.body.nivelAtual,
            area: req.body.area,
            userId: req.user.id
        })
        return res.status(201).json(trilhas)
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao criar a trilha",
            error: erro.mensagem,
        })
    }
}

export async function listarTrilhas(req, res) {
    try {
        const trilhas = await trilha.findAll({
            where: {
                userId: req.user.id,
            },
            include: [planoEstudo]
        })
        return res.status(200).json(trilhas)
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao listar as trilhas",
            error: erro.mensagem,
        })
    }
}

export async function buscarTrilhas(req, res) {
    try {
        const { id } = req.params
        const trilhaId = await trilha.findOne({
            where: {
                id,
                userId: req.user.id
            }
        })

        if (!trilhaId) {
            return res.status(404).json({
                mensagem: "Trilha não encotrada"
            })
        }
        return res.status(200).json(trilhaId)
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar a trilha",
            error: erro.mensagem
        })
    }
}

export async function atualizarTrilha(req, res) {
    try {
        const { id } = req.params
        const trilhaId = await trilha.findAll({
            where: {
                id,
                userId: req.user.id
            }
        })
        if (!trilhaId) {
            return res.status(404).json({
                mensagem: "Trilha não encotrada"
            })
        }

        await trilhaId.update(req.body)
        return res.status(200).json(trilhaId)
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao atualizar a trilha",
            error: erro.mensagem
        })
    }

}

export async function deleteTrilhas(req, res) {
    try {
        const { id } = req.params
        const trilhaId = await trilha.findOne({
            where: {
                id,
                res
            }
        })
        if (!trilhaId) {
            return res.status(404).json({
                mensagem: "Trilha não encotrada"
            })
        }
        await trilhaId.update(req.body)
        return res.status(200).json({
            mensagem: "Trilha excluida com sucesso"
        })
    } catch (erro) {
        return res.status(500).json({
            mensagem: "Erro ao deletar",
            error: erro.mensagem
        })
    }

}