import "dotenv/config";
import express from "express";
import urlRoutes from "./routes/urlRoutes";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(urlRoutes);

app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
})