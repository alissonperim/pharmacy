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

        const newUser = this.context.create(user)

        const userExists = await this.context.exists({ where: [
            { email: newUser.email },
            { phoneNumber: newUser.phoneNumber }
        ]})

        if (userExists) throw new CreateException('User already exists')

        return this.context.save(newUser)
    }
}
