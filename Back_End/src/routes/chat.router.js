import { Router } from "express";
import { autenticar } from "../middlewares/auth.middleware.js";
import { enviarMensagem, buscarMensagens } from "../controllers/mensagem.controller.js";

const router = Router();

router.use(autenticar);

router.get("/messages", buscarMensagens);
router.post("/messages", enviarMensagem);

export default router;
