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
            id,
        } = params

        let user = await this.context.findOne({ where: { id }})
            
        console.log('user', user)
        if (!user) {
            throw new Error('User not found')
        }

        user = {...user, ...params}

        await this.context.save(user)


        return user
    }
}
