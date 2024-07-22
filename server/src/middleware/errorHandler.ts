/* The CustomError class in TypeScript extends the Error class and includes properties for error code,
error message, and status code, along with an errorHandler function to handle custom errors in an
Express application. */
import { NextFunction, Request, Response } from 'express';

/* The CustomError class in TypeScript defines a custom error with an error code, error message, and
status code. */
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
  /* The `if (error instanceof CustomError)` statement is checking if the `error` object is an instance
 of the `CustomError` class. If the `error` object is an instance of `CustomError`, it means that
 the error was intentionally thrown using the `CustomError` class. */
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.errorMessage });
  }

  //   default
  return res.status(500).send({ error: 'Interal server Error' });
};
