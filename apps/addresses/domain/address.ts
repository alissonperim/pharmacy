import { auditableData } from '@shared/auditableData'
import { BaseDomain } from '@shared/domain/baseDomain'
import { nanoIdGenerator, DOMAIN } from '@shared/utils'
import { BeforeInsert, Column, Entity } from 'typeorm'

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
            length: 20,
        }
    )
    number!: string

    @Column(
        {
            type: 'varchar',
            length: 120,
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
            nullable: true,
        }
    )
    zipCode!: string

    @Column(
        {
            type: 'varchar',
            length: 120,
            nullable: true,
        }
    )
    complement?: string

    @BeforeInsert()
    protected generateId() {
        const { createdBy, updatedBy } = auditableData()
        this.id = nanoIdGenerator(DOMAIN.ADDRESS)
        this.createdBy = createdBy
        this.updatedBy = updatedBy
    }
}
