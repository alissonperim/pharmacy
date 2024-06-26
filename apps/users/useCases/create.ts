import { ICreateUserRepository } from '@users/contracts/repositories'
import { ICreateUserUseCase } from '@users/contracts/useCases'
import { userDto } from '@users/domain/dto'
import { User as UserDomain } from '@shared/contracts'
import { inject, injectable } from 'tsyringe'
import { CreateUserRequestParams } from '@users/handlers/create/schema'

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(
        @inject('CreateUserRepository')
        private repository: ICreateUserRepository
    ) {}
    async execute(params: CreateUserRequestParams): Promise<UserDomain> {

        const user = await this.repository.create(params)
        return userDto(user)
    }
}
