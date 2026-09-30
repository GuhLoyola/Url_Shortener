import { Router } from "express";
import * as url from "../controllers/urlController"

const router = Router();

router.get("/status", url.verificarStatus)

export default router;