import { User } from '@users/domain/user'
import { User as UserDomain } from '@shared/contracts'

export interface ICreateUserUseCase {
    execute(user: Partial<User>): Promise<UserDomain>
}

export interface IListUsersUseCase {
    execute(): Promise<UserDomain[]>
}
