import { NextFunction, Request, Response } from 'express'
import * as yup from 'yup'

export const schemaValidations = (schema: yup.Schema) => 
    async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const pathParams = req.path
        const queryParams = req.query

        Object.assign(data, {pathParams , queryParams})

        console.log(data)

        await schema.validate(data, { abortEarly: false, recursive: true })
        next()
    } catch (error) {
        return res.status(400).json({ message: error.errors })
    }
}
