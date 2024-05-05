import { Address } from '@addresses/domain/address'
import { BaseDomain } from './baseDomain'
import { Column, JoinColumn, OneToOne, Relation } from 'typeorm'


export class PersonalData extends BaseDomain {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    name!: string

    @Column(
        {
            name: 'last_name',
            type: 'varchar',
            length: 120,
        }
    )
    lastName!: string

    @Column(
        {
            name: 'phone_number',
            type: 'varchar',
            length: 14,
        }
    )
    phoneNumber!: string

    @Column(
        {
            name: 'email',
            type: 'varchar',
            length: 120,
        }
    )
    email!: string

    @Column(
        {
            name: 'birth_date',
            type: 'date',
        }
    )
    birthDate!: Date

    @OneToOne(() => Address, { eager: true, nullable: true })
    @JoinColumn()
    address?: Relation<Address>
}
