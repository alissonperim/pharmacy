import { Address } from '../../addresses/domain/address'
import { User } from '../../users/domain/user'
import { DataSource } from 'typeorm'

export const AppDataSource = () => {
    return new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'pharmacy_db',
        password: '123456',
        database: 'pharmacy',
        entities: [User, Address],
        migrations: [
            `${'apps/infra/migrations/*.ts'}`
        ],
        poolSize: 20
    })
}


export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pharmacy_db',
    password: '123456',
    database: 'pharmacy',
    entities: [
        User,
        Address
    ],
    migrations: [
        'apps/infra/migrations/*.ts'
    ]
})
