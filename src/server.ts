import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import urlRoutes from "./routes/urlRoutes";
import { swaggerSpec } from "./docs/swagger";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(urlRoutes);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
})