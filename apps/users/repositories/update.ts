import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { IUpdateUserRepository } from '@users/contracts/repositories'
import { User } from '@users/domain/user'
import { UpdateUserRequestParams } from '@users/handlers/update/schema'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    async update(params: UpdateUserRequestParams): Promise<User> {
        const {
            address,
            birthDate,
            email,
            lastName,
            name,
            phoneNumber,
            roles,
            
        } = params

        const userUpdate = await this.context.update('a', {address, birthDate, email, lastName, name, phoneNumber, roles})

        return userUpdate.raw
    }
}
