import path from "path";

export const swaggerOptions = {
    swaggerDefinition: {
        openapi : '3.0.0',
        info: {
            title: 'API METEO',
            version: '1.0.0',
            description : 'Documentation de l\'API Météo',
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "serveur local"
            }
        ]
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')],
}