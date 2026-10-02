import { Router } from "express";
import * as url from "../controllers/urlController"

const router = Router();

router.get("/status", url.verificarStatus)
router.get("/consultar-url", url.findUrlEncurtadaById)
router.get("/consultar-url-encurtada", url.findUrlEncurtadaByEncurtamento)
router.get("/consultar-urls", url.buscarUrlsEncurtadasByData)
router.get("/:encurtada", url.redirecionarParaUrlOriginal)

router.post("/add", url.incluirUrl)

export default router;