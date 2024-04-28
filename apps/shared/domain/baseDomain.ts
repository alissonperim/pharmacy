import { randomUUID as uuid } from 'crypto'
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export class BaseDomain {
    @PrimaryColumn(
        {
            name: 'id',
            type: 'uuid',
            unique: true,
            nullable: false,
            primary: true,
        }
    )
    id!: string

    @CreateDateColumn(
        {
            name: 'created_at',
            default: new Date()
        }
    )
    createdAt!: Date

    @UpdateDateColumn(
        {
            name: 'updated_at',
        }
    )
    updatedAt!: Date

    @DeleteDateColumn(
        {
            name: 'deleted_at',
        }
    )
    deletedAt?: Date

    @Column(
        {
            name: 'created_by',
            type: 'varchar',
            length: 255,
        }
    )
    createdBy!: string

    @Column(
        {
            name: 'updated_by',
            type: 'varchar',
            length: 255,
        }
    )
    updatedBy!: string

    @Column(
        {
            name: 'deleted_by',
            type: 'varchar',
            length: 255,
        }
    )
    deletedBy?: string

    constructor(
        id: string,
        deletedAt: Date,
        createdBy: string,
        updatedBy: string,
        deletedBy: string
    ) {
        if (!id) this.id = uuid()

        this.deletedAt = deletedAt
        this.createdBy = createdBy
        this.updatedBy = updatedBy
        this.deletedBy = deletedBy
    }
}
