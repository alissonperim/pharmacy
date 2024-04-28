import { CreateUserUseCase } from '@users/useCases/create'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default async (req: Request, res: Response) => {
    const usecase = container.resolve<CreateUserUseCase>('CreateUserUseCase')
    console.log('passou')
    try {
        await usecase.execute(req.body)
        res.status(201).json({ message: 'User created' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
