import { Request, Response, NextFunction } from 'express'

import AppError from '../errors/AppError'

export default function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
        })
    } else if(error instanceof Error) {
        console.log(error)
        throw new AppError ('Internal server error', 500)
    }

    next()
}