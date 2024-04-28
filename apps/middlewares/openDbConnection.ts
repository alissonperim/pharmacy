import { AppDataSource } from '@infra/data/datasource'
import { NextFunction, Request, Response } from 'express'

export const openDbConnection = async (_: Request, __: Response, next: NextFunction) => {
    if (!AppDataSource().isInitialized) {
        await AppDataSource().initialize()
        .then(() => console.log('DB Connected'))
        .catch((err)  => console.error(err))
    } else {
        console.log('DB already connected')
    }
    next()
}
