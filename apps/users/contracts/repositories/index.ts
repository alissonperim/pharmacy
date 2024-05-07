import { User } from '@users/domain/user'

export interface ICreateUserRepository {
    create(user: Partial<User>): Promise<User>
}

export interface IListUsersRepository {
    list(): Promise<User[]>
}
