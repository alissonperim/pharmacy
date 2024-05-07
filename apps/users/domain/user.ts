import 'dotenv/config'
import { Roles } from '@shared/contracts'
import { PersonalData } from '@shared/domain'
import { BeforeInsert, Column, Entity } from 'typeorm'
import { DOMAIN, nanoIdGenerator } from '@shared/utils'

@Entity('users')
export class User extends PersonalData {
    @Column(
        {
            type: 'enum',
            enum: Roles,
            array: true,
            default: [Roles.EMPLOYEE],
        }
    )
    roles!: Roles[]

    @BeforeInsert()
    generateId() {
        this.id =  nanoIdGenerator(DOMAIN.USER)
    }
}
