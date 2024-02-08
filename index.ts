import express, {NextFunction, Request, Response} from "express";
import { WeatherController } from "./controllers/weatherController";

import dotenv from "dotenv";
import { errorHandler } from "./midllewares/errorHandlers";
import { API_KEY } from "./constantes/config";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from "./swaggerOptions";
dotenv.config();

const cors = require('cors'); // Importer le module CORS


const app = express();
const weatherController = new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use(cors());





// Route pour tester que notre api est sur la bonne voie :)
app.get("/testApi",  (req: Request, res: Response) => {
  res.send("Coucou, je suis dans l'API météo");
})





app.get("/weather/:country", async (req: Request, res: Response, next: NextFunction) => {
  await weatherController.getWeather_1(req, res, next);
})

app.get("/weather/:region", async (req: Request, res: Response, next: NextFunction) => {
  await weatherController.getWeather_2(req, res, next);
})


app.get("/weather/:departement", async (req: Request, res: Response, next: NextFunction) => {
  await weatherController.getWeather_3(req, res, next);
})


const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Le server est en cours d'execution sur le port ${PORT}`);
});