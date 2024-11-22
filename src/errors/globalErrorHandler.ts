import { ZodError } from "zod";
import { IGenericErrorMessage } from "../interface/error";
import handleValidationError from "./handleValidationError";
import handleZodError from "./handleZodError";
import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (
    error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    // config.env === 'development'
    //   ? console.log(`globalErrorHandler`, error)
    //   : errorLogger.error(`globalErrorHandler`, error);
  
    let statusCode = 500;
    let message = 'something went wrong';
    let errorMessages: IGenericErrorMessage[] = [];
  
    if (error?.name === 'ValidationError') {
      const simplifiedError = handleValidationError(error);
      statusCode = simplifiedError.statusCode;
      message = simplifiedError.message;
      errorMessages = simplifiedError.errorMessage;
    } else if (error instanceof ZodError) {
      const simplifiedError = handleZodError(error);
      statusCode = simplifiedError.statusCode;
      message = simplifiedError.message;
      errorMessages = simplifiedError.errorMessage;
    } 
    
    res.status(statusCode).json({
      success: false,
      message,
      errorMessages,
      stack: error?.stack,
    });
  };
  export default globalErrorHandler;