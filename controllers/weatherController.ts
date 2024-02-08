import {NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import { WEATHER_API_ERROR_MESSAGE } from "../constantes/errorMessages";
import { WEATHERAPI_URL } from "../constantes/config";
import { ApiError } from "../errors/ApiError";
import { MinimalWeatherData } from "../MinimalWeatherData";

/**
 * @swagger
 * tags:
 *  name: Weather
 *  description: Operations liés à  la météo
 */


export class WeatherController {
  private API_KEY: string;
  constructor(apiKey: string){
    this.API_KEY = apiKey;
  }

/**
   * @swagger
   *
  /weather/country/{country}:
    get:
      summary: Obtient les informations météo par pays.
      description: Récupère les informations météo pour un pays donné.
      tags: 
        - Weather
      parameters:
        - in: path
          name: country
          required: true
          description: Nom du pays.
          schema:
            type: string
      responses:
        '200':
          description: Succès. Retourne les données météo.
        '400':
          description: Requête incorrecte. Vérifiez les paramètres.
/**
   * @swagger
   *
  paths:
    /weather/region/{region}:
      get:
        summary: Obtient les informations météo par région.
        description: Récupère les informations météo pour une région donnée.
        tags: 
          - Weather
        parameters:
          - in: path
            name: region
            required: true
            description: Nom de la région.
            schema:
              type: string
        responses:
          '200':
            description: Succès. Retourne les données météo.
          '400':
            description: Requête incorrecte. Vérifiez les paramètres.
*/  
/**
   * @swagger
   *
  /weather/departement/{departement}:
    get:
      summary: Obtient les informations météo par département.
      description: Récupère les informations météo pour un département donné.
      tags: 
        - Weather
      parameters:
        - in: path
          name: departement
          required: true
          description: Nom du département.
          schema:
            type: string
      responses:
        '200':
          description: Succès. Retourne les données météo.
        '400':
          description: Requête incorrecte. Vérifiez les paramètres.

*/

  public async getWeather(req: Request, res: Response, next: NextFunction): Promise<void>{
    const city: string = req.params.city;
    try{
      const response: AxiosResponse = await axios.get(
        `${WEATHERAPI_URL}/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
      );
      
     const minimalData : MinimalWeatherData = {
      city : response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon
     }
     res.json(minimalData);
    }catch(error){
     next(new ApiError(WEATHER_API_ERROR_MESSAGE))
    }
  }

  public async getWeather_1(req: Request, res: Response, next: NextFunction): Promise<void>{
    const city: string = req.params.city;
    try{
      const response: AxiosResponse = await axios.get(
        `${WEATHERAPI_URL}/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
      );
      
     const minimalData : MinimalWeatherData = {
      city : response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon
     }
     res.json(minimalData);
    }catch(error){
     next(new ApiError(WEATHER_API_ERROR_MESSAGE))
    }
  }

  public async getWeather_2(req: Request, res: Response, next: NextFunction): Promise<void>{
    const city: string = req.params.city;
    try{
      const response: AxiosResponse = await axios.get(
        `${WEATHERAPI_URL}/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
      );
      
     const minimalData : MinimalWeatherData = {
      city : response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon
     }
     res.json(minimalData);
    }catch(error){
     next(new ApiError(WEATHER_API_ERROR_MESSAGE))
    }
  }



  public async getWeather_3(req: Request, res: Response, next: NextFunction): Promise<void>{
    const city: string = req.params.city;
    try{
      const response: AxiosResponse = await axios.get(
        `${WEATHERAPI_URL}/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
      );
      
     const minimalData : MinimalWeatherData = {
      city : response.data.location.name,
      country: response.data.location.country,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon
     }
     res.json(minimalData);
    }catch(error){
     next(new ApiError(WEATHER_API_ERROR_MESSAGE))
    }
  }

}
  
