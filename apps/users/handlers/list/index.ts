import { ListUsersUseCase } from '@users/useCases/list'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (_: Request, res: Response) => {
    const useCase = container.resolve<ListUsersUseCase>('ListUsersUseCase')

    try {
        const response = await useCase.execute()

        res.ok(response)
    } catch (error) {
        console.error(error)
        //res.status(500).json({ message: error.message })
    }
}
