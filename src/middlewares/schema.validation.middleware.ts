import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction)=> void;

function validate(schema: ObjectSchema, type: "body" | "params") {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {abortEarly: false,});
      if (!error) {next();} 
      else {res.status(400).json({ errors: error.details.map((err) => err.message) });}
    };
  }

function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {return validate(schema, "body");}
function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {return validate(schema, "params");}

export { validateBody, validateParams };