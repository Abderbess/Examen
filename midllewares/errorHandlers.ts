import { NextFunction, Request, Response } from "express";
import { UNKNOWN_ERROR, WEATHER_API_ERROR } from "../constantes/errorCodes";
import { CustomError } from "../errors/CustomError";

export function errorHandler(err: Error, req: Request, res: Response, 
    next: NextFunction){
        console.log(err.stack);
        if( err instanceof CustomError){
            res.status(500).json({error : err.message, errorCode: err.errorCode})
        }else {
            res.status(500).json({error : "Une erreur inatetendue s'est produite", errorCode: UNKNOWN_ERROR})
        }
    }
