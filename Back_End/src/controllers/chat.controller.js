import * as userModel from "../models/userModels.js"
import { Mensagem } from "../models/mensagem.js";


export async function criarChat(req, res) {

    const userId = req.usuario?.id;

    const conversa =
        await userModel.Conversa.create({
            userId
        });

    res.json(conversa);
}
export async function buscarChat(req,res) {

    const { id } =
        req.params;

    const historico =
        await Mensagem.findAll({

            where: {
                conversaId: id
            },

            order: [
                ["createdAt", "ASC"]
            ]

        });

    res.json(
        historico
    );

}