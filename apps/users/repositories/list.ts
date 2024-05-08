import { DataSourceSingleton } from '@infra/datasourceSingleton'
import { IListUsersRepository } from '@users/contracts/repositories'
import { User } from '@users/domain/user'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'

@injectable()
export class ListUsersRepository implements IListUsersRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)
    
    async list(): Promise<User[]> {
        return this.context.find()
    }
}
