import { HttpResponse } from '@shared/httpResponses'
import { CreateUserUseCase } from '@users/useCases/create'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response) => {
    const usecase = container.resolve<CreateUserUseCase>('CreateUserUseCase')
    try {
        const response = await usecase.execute(req.body)

        const httpResponse = HttpResponse.created(response)
        res.status(httpResponse.statusCode).json(httpResponse.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
