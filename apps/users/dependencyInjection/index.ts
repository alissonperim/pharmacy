import { ICreateUserRepository } from '@users/contracts/repositories/user'
import { ICreateUserUseCase } from '@users/contracts/useCases/create'
import { CreateUserRepository } from '@users/repositories/create'
import { CreateUserUseCase } from '@users/useCases/create'
import { container } from 'tsyringe'

export class UsersDependenciesInjection {
    public static create() {
        container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
        container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
    }
}
