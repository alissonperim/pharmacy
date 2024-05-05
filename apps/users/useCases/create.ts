import { ICreateUserRepository } from '@users/contracts/repositories/user'
import { ICreateUserUseCase } from '@users/contracts/useCases/create'
import { User } from '@users/domain/user'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(
        @inject('CreateUserRepository')
        private repository: ICreateUserRepository
    ) {}
    async execute(params: Partial<User>): Promise<User> {
        console.log(params)
        const user = await this.repository.create(params)
        console.log(user)

        return user
    }
}
