import { User } from '@users/domain/user'

export interface ICreateUserUseCase {
    execute(user: Partial<User>): Promise<User>
}
