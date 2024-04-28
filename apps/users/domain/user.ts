import { PersonalData } from '@shared/domain/personalData'
import { Roles } from '@users/enums/roles'
import { Column, Entity } from 'typeorm'

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
}
