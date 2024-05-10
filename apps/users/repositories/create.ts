import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { auditableData } from '@shared/auditableData/auditableData'
import { CreateException } from '@shared/exceptions/createException'
import { ICreateUserRepository } from '@users/contracts/repositories'
import { User } from '@users/domain/user'
import { Repository } from 'typeorm'

export class CreateUserRepository implements ICreateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    async create(user: Partial<User>): Promise<User> {
        const { createdBy, updatedBy } = auditableData()
        Object.assign(user, { createdBy, updatedBy })
        try {
            return this.context.save(this.context.create(user))
        } catch (error) {
            throw new CreateException('Fail to create user')
        }
    }
}
