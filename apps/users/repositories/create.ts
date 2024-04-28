import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { ICreateUserRepository } from '@users/contracts/repositories/user'
import { User } from '@users/domain/user'
import { Repository } from 'typeorm'

export class CreateUserRepository implements ICreateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    constructor() {}
    async create(user: Partial<User>): Promise<User> {
        return await this.context.save(this.context.create(user))
    }
}
