import { BaseDomain } from '@shared/domain/baseDomain'
import { Column, Entity } from 'typeorm'

@Entity('addresses')
export class Address extends BaseDomain {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    street!: string

    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    number!: string

    @Column(
        {
            type: 'varchar',
            length: 80,
        }
    )
    neighborhood!: string

    @Column(
        {
            type: 'varchar',
            length: 60,
        }
    )
    city!: string

    @Column(
        {
            type: 'varchar',
            length: 60,
        }
    )
    state!: string

    @Column(
        {
            type: 'varchar',
            length: 60,
        }
    )
    country!: string

    @Column(
        {
            type: 'varchar',
            length: 9,
        }
    )
    zipCode!: string

    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    complement?: string

    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    reference?: string
}
