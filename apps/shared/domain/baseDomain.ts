import { randomUUID as uuid } from 'crypto'
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

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
            nullable: true,
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
    createdBy?: string

    @Column(
        {
            name: 'updated_by',
            type: 'varchar',
            length: 255,
        }
    )
    updatedBy?: string

    @Column(
        {
            name: 'deleted_by',
            type: 'varchar',
            length: 255,
            nullable: true,
        }
    )
    deletedBy?: string

    @BeforeInsert()
    generateData() {
        const currentDate = new Date()
        
        this.id = uuid()
        this.createdAt = currentDate
        this.updatedAt = currentDate
    }
}
