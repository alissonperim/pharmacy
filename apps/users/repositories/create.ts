import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { auditableData } from '@shared/auditableData/auditableData'
import { ICreateUserRepository } from '@users/contracts/repositories/user'
import { User } from '@users/domain/user'
import { Repository } from 'typeorm'

export class CreateUserRepository implements ICreateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    constructor() {}
    async create(user: Partial<User>): Promise<User> {
        const { createdBy, updatedBy } = auditableData()
        Object.assign(user, { createdBy, updatedBy })
        return this.context.save(this.context.create(user))
    }
}
