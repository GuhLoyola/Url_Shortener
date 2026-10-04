import { Router } from "express";
import * as url from "../controllers/urlController";

const router = Router();

/**
 * @openapi
 * /status:
 *   get:
 *     summary: Verifica o status da API
 *     description: Retorna OK quando a API está funcionando normalmente.
 *     tags:
 *       - Sistema
 *     responses:
 *       200:
 *         description: API funcionando normalmente
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: OK
 */
router.get("/status", url.verificarStatus);

/**
 * @openapi
 * /consultar-url:
 *   get:
 *     summary: Busca uma URL pelo ID
 *     description: Recebe um ID e retorna a URL encurtada correspondente.
 *     tags:
 *       - URLs
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *         description: ID da URL cadastrada
 *     responses:
 *       200:
 *         description: URL encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Id:
 *                   type: integer
 *                   example: 1
 *                 Url_Encurtada:
 *                   type: string
 *                   example: http://localhost:3000/abc123
 *       400:
 *         description: ID inválido
 *       404:
 *         description: URL não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/consultar-url", url.findUrlEncurtadaById);

/**
 * @openapi
 * /consultar-url-encurtada:
 *   get:
 *     summary: Busca uma URL pelo código de encurtamento
 *     description: Recebe um código de encurtamento e retorna a URL correspondente.
 *     tags:
 *       - URLs
 *     parameters:
 *       - in: query
 *         name: encurtamento
 *         required: true
 *         schema:
 *           type: string
 *         example: abc123
 *         description: Código da URL encurtada
 *     responses:
 *       200:
 *         description: URL encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Id:
 *                   type: integer
 *                   example: 1
 *                 Url_Encurtada:
 *                   type: string
 *                   example: http://localhost:3000/abc123
 *       400:
 *         description: Encurtamento inválido
 *       404:
 *         description: URL não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/consultar-url-encurtada", url.findUrlEncurtadaByEncurtamento);

/**
 * @openapi
 * /consultar-urls:
 *   get:
 *     summary: Busca URLs por data de criação
 *     description: Recebe uma data e retorna as URLs encurtadas criadas nessa data.
 *     tags:
 *       - URLs
 *     parameters:
 *       - in: query
 *         name: data
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: 2026-10-04
 *         description: Data de criação das URLs
 *     responses:
 *       200:
 *         description: URLs encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                     type: integer
 *                     example: 1
 *                   Url_Encurtada:
 *                     type: string
 *                     example: http://localhost:3000/abc123
 *       400:
 *         description: Data inválida
 *       404:
 *         description: Nenhuma URL encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/consultar-urls", url.buscarUrlsEncurtadasByData);

router.get("/:encurtada", url.redirecionarParaUrlOriginal);

/**
 * @openapi
 * /add:
 *   post:
 *     summary: Adiciona uma URL encurtada ao banco
 *     description: Recebe uma URL e retorna uma versão encurtada.
 *     tags:
 *       - URLs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               urlOriginal:
 *                 type: string
 *                 format: uri
 *                 example: https://www.google.com
 *     responses:
 *       201:
 *         description: URL encurtada criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Id:
 *                   type: integer
 *                   example: 1
 *                 Url_Encurtada:
 *                   type: string
 *                   example: http://localhost:3000/abc123
 *       400:
 *         description: URL inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/add", url.incluirUrl);

export default router;