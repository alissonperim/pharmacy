import { ICreateUserRepository, IListUsersRepository, IUpdateUserRepository } from '@users/contracts/repositories'
import { ICreateUserUseCase, IListUsersUseCase, IUpdateUserUseCase } from '@users/contracts/useCases'
import { CreateUserRepository } from '@users/repositories/create'
import { ListUsersRepository } from '@users/repositories/list'
import { UpdateUserRepository } from '@users/repositories/update'
import { CreateUserUseCase } from '@users/useCases/create'
import { ListUsersUseCase } from '@users/useCases/list'
import { UpdateUserUseCase } from '@users/useCases/update'
import { container } from 'tsyringe'

export class UsersDependenciesInjection {
    public static create() {
        /*
            Repositories Dependency Injection section
        */
        container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
        container.registerSingleton<IListUsersRepository>('ListUsersRepository', ListUsersRepository)
        container.registerSingleton<IUpdateUserRepository>('UpdateUserRepository', UpdateUserRepository)


        /*
            UseCases Dependency Injection section
        */
        container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
        container.registerSingleton<IListUsersUseCase>('ListUsersUseCase', ListUsersUseCase)
        container.registerSingleton<IUpdateUserUseCase>('UpdateUserUseCase', UpdateUserUseCase)
    }
}
