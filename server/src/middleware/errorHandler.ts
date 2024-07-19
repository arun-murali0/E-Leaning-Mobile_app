import { NextFunction, Request, Response } from 'express';

export class CustomError extends Error {
  errorCode: number | undefined;
  errorMessage: string;
  statusCode: number;

  constructor(errorMessage: string, statusCode: number, errorCode?: number) {
    super(errorMessage);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
}

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.errorMessage });
  }

  //   default
  return res.status(500).send({ error: 'internal server error' });
};
