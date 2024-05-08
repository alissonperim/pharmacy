import { User } from '@users/domain/user'
import { CreateUserRequestParams } from '@users/handlers/create/schema'
import { UpdateUserRequestParams } from '@users/handlers/update/schema'

export interface ICreateUserRepository {
    create(user: CreateUserRequestParams): Promise<User>
}

export interface IListUsersRepository {
    list(): Promise<User[]>
}

export interface IUpdateUserRepository {
    update(params: UpdateUserRequestParams): Promise<User>
}
