import { Request, Response, NextFunction } from "express";

export default function validationSchema(schema: any, req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((e: any) => typeof e === "string" ? e : e.message);
    console.log(errorMessages);
    return res.status(422).send(errorMessages.join(", "));
  }
  next();
}
