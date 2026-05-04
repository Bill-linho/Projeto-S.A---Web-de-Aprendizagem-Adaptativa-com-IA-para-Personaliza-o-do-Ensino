import { Router } from "express";
import { listarUsuarios, buscarPerfil } from "../controllers/user.controller.js";
import { autenticar } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", autenticar, listarUsuarios);

// Rota protegida — pegar usuário logado (perfil)
router.get("/me", autenticar, buscarPerfil);


export default router;