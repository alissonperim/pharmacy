import { IListUsersRepository } from '@users/contracts/repositories'
import { IListUsersUseCase } from '@users/contracts/useCases'
import { User } from '@users/domain/user'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
    constructor(
        @inject('ListUsersRepository')
        private readonly repository: IListUsersRepository
    ) {}
    async execute(): Promise<User[]> {
        return this.repository.list()
    }
}
