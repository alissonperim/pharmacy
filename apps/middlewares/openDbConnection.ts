import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { NextFunction, Request, Response } from 'express'

export const openDbConnection = async (_: Request, __: Response, next: NextFunction) => {
    await DataSourceSingleton.getInstance().initialize()
    next()
}
