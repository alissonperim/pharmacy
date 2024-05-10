import { UpdateUserUseCase } from '@users/useCases/update'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response) => {
    const id = req.path
    const { body } = req

    Object.assign(body, {id})
    const usecase = container.resolve<UpdateUserUseCase>('UpdateUserUseCase')
    try {
        const response = await usecase.execute(req.body)

        res.ok(response)
    } catch (error) {
        console.error(error)
        //res.status(500).json({ message: error.message })
    }
}