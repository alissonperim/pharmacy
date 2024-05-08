import { User as UserDomain } from '@shared/contracts'
import { CreateUserRequestParams } from '@users/handlers/create/schema'
import { UpdateUserRequestParams } from '@users/handlers/update/schema'

export interface ICreateUserUseCase {
    execute(user: CreateUserRequestParams): Promise<UserDomain>
}

export interface IListUsersUseCase {
    execute(): Promise<UserDomain[]>
}

export interface IUpdateUserUseCase {
    execute(params: UpdateUserRequestParams): Promise<UserDomain>
}
