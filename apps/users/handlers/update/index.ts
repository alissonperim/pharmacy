import { UpdateUserUseCase } from '@users/useCases/update'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { body } = req

    Object.assign(body, {id})
    console.log(body)
    const usecase = container.resolve<UpdateUserUseCase>('UpdateUserUseCase')
    try {
        const response = await usecase.execute(body)

        res.ok(response)
    } catch (error) {
        console.error(error)
        next(error)
    }
}
