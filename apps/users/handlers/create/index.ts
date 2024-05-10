import { CreateUserUseCase } from '@users/useCases/create'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response) => {
    
    const usecase = container.resolve<CreateUserUseCase>('CreateUserUseCase')
    const response = await usecase.execute(req.body)

    return res.created(response)
}
