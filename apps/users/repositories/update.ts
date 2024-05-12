import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { IUpdateUserRepository } from '@users/contracts/repositories'
import { User } from '@users/domain/user'
import { UpdateUserRequest } from '@users/useCases/update'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    async update(params: UpdateUserRequest): Promise<User> {
        const {
            address,
            birthDate,
            email,
            lastName,
            name,
            phoneNumber,
            roles,
            id,
        } = params

        const userUpdate = await this.context.update(id, {address, birthDate, email, lastName, name, phoneNumber, roles})

        return userUpdate.raw
    }
}
