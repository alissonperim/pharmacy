import { User } from '@shared/contracts'
import { IUpdateUserRepository } from '@users/contracts/repositories'
import { IUpdateUserUseCase } from '@users/contracts/useCases'
import { userDto } from '@users/domain/dto'
import { UpdateUserRequestParams } from '@users/handlers/update/schema'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
    constructor(
        @inject('UpdateUserRepository')
        private readonly repository: IUpdateUserRepository
    ) {}

    async execute (params: UpdateUserRequestParams): Promise<User> {
        const user = await this.repository.update(params)
        
        return userDto(user)
    }
}
