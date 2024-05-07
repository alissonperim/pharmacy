import { Address } from './address'

export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    EMPLOYEE = 'EMPLOYEE',
    CASHIER = 'CASHIER',
}

export interface User {
    id?: string
    roles: Roles[]
    name: string
    lastName: string
    phoneNumber: string
    birthDate: Date
    address?: Address
    email: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    createdBy: string
    updatedBy: string
    deletedBy: string
}
