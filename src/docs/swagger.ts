import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "URL Shortener API",
            version: "1.0.0",
            description: "API responsável pelo encurtamento, consulta e redirecionamento de URLs."
        },

        servers: [
            {
                url: "http://localhost:8080",
                description: "Ambiente local"
            }
        ]
    },

    apis: [
        "./src/routes/*.ts"
    ]
};

export const swaggerSpec = swaggerJsdoc(options);