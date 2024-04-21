import { randomUUID as uuid } from 'crypto'

export class BaseDomain {
    id!: string
    createdAt!: Date
    updatedAt!: Date
    deletedAt?: Date
    createdBy!: string
    updatedBy!: string
    deletedBy?: string

    constructor(
        id: string,
        createdAt: Date,
        deletedAt: Date,
        createdBy: string,
        updatedBy: string,
        deletedBy: string
    ) {
        if (!id) this.id = uuid()

        if (!createdAt) {
            this.createdAt = new Date()
            this.updatedAt = new Date()
        }

        this.deletedAt = deletedAt
        this.createdBy = createdBy
        this.updatedBy = updatedBy
        this.deletedBy = deletedBy
    }
}
