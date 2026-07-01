import { Mensagem } from "../models/mensagem.js";
import { Conversa } from "../models/conversa.js";
import { perguntarGemini } from "../services/geminiService.js";

export async function enviarMensagem(req, res) {
    try {
        const userId = req.usuario?.id;
        const { pergunta } = req.body;

        if (!userId) {
            return res.status(401).json({ erro: "Usuário não autenticado" });
        }

        if (!pergunta || !pergunta.trim()) {
            return res.status(400).json({ erro: "Pergunta não pode ser vazia" });
        }

        let conversa = await Conversa.findOne({ where: { userId } });

        if (!conversa) {
            conversa = await Conversa.create({ userId });
        }

        await Mensagem.create({
            conversaId: conversa.id,
            autor: "usuario",
            texto: pergunta,
        });

        const resposta = await perguntarGemini(pergunta);

        await Mensagem.create({
            conversaId: conversa.id,
            autor: "gemini",
            texto: resposta,
        });

        res.json({ resposta, conversaId: conversa.id });
    } catch (erro) {
        console.error("Erro no enviarMensagem:", erro);
        res.status(500).json({ erro: "Erro ao enviar mensagem" });
    }
}

export async function buscarMensagens(req, res) {
    try {
        const userId = req.usuario?.id;

        if (!userId) {
            return res.status(401).json({ erro: "Usuário não autenticado" });
        }

        const conversa = await Conversa.findOne({ where: { userId } });

        if (!conversa) {
            return res.json([]);
        }

        const historico = await Mensagem.findAll({
            where: { conversaId: conversa.id },
            order: [["createdAt", "ASC"]],
        });

        res.json(historico);
    } catch (erro) {
        console.error("Erro no buscarMensagens:", erro);
        res.status(500).json({ erro: "Erro ao buscar mensagens" });
    }
}