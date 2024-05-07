import { ICreateUserRepository, IListUsersRepository } from '@users/contracts/repositories'
import { ICreateUserUseCase, IListUsersUseCase } from '@users/contracts/useCases'
import { CreateUserRepository } from '@users/repositories/create'
import { ListUsersRepository } from '@users/repositories/list'
import { CreateUserUseCase } from '@users/useCases/create'
import { ListUsersUseCase } from '@users/useCases/list'
import { container } from 'tsyringe'

export class UsersDependenciesInjection {
    public static create() {
        /*
            Repositories Dependency Injection section
        */
        container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
        container.registerSingleton<IListUsersRepository>('ListUsersRepository', ListUsersRepository)

        /*
            UseCases Dependency Injection section
        */
        container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
        container.registerSingleton<IListUsersUseCase>('ListUsersUseCase', ListUsersUseCase)
    }
}
