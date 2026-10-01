import { Router } from "express";
import * as url from "../controllers/urlController"

const router = Router();

router.get("/status", url.verificarStatus)
router.get("/consultar", url.findUrlEncurtadaById)
router.get("/consultar/encurtada", url.findUrlEncurtadaByEncurtamento)
router.post("/add", url.incluirUrl)

export default router;