/**
 * The `tryCatch` function is a higher-order function in TypeScript that wraps around an Express
 * controller function to handle any errors that may occur during its execution.
 * @param {any} controller - The `controller` parameter in the `tryCatch` function is a function that
 * will be executed when the middleware is called. It is expected to be an asynchronous function that
 * takes the `Request` and `Response` objects as parameters.
 * @returns The `tryCatch` function is returning a new asynchronous function that takes `req`, `res`,
 * and `next` as parameters. Inside this function, it tries to execute the `controller` function with
 * `req` and `res` as arguments. If an error occurs during the execution of the `controller` function,
 * the error message is passed to the `next` function.
 */
import { NextFunction, Request, Response } from 'express';

export const tryCatch =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error: any) {
      return next(error.message);
    }
  };
