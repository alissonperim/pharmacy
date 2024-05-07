import { HttpResponse } from '@shared/httpResponses'
import { ListUsersUseCase } from '@users/useCases/list'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (_: Request, res: Response) => {
    const useCase = container.resolve<ListUsersUseCase>('ListUsersUseCase')

    try {
        const response = await useCase.execute()

        const httpResponse = HttpResponse.ok(response)

        res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
