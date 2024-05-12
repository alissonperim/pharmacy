import { CreateUserUseCase } from '@users/useCases/create'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const usecase = container.resolve<CreateUserUseCase>('CreateUserUseCase')
        const response = await usecase.execute(req.body)
    
        return res.created(response)
    } catch (error) {
        next(error)
    }
}
