import { IListUsersRepository } from '@users/contracts/repositories'
import { IListUsersUseCase } from '@users/contracts/useCases'
import { userDto } from '@users/domain/dto'
import { inject, injectable } from 'tsyringe'
import { User } from '@shared/contracts'

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
    constructor(
        @inject('ListUsersRepository')
        private readonly repository: IListUsersRepository
    ) {}
    async execute(): Promise<User[]> {
        const users = await this.repository.list()

        return users.map(user => userDto(user))
    }
}
