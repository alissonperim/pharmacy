import { Address } from './address'

export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    EMPLOYEE = 'EMPLOYEE',
    CASHIER = 'CASHIER',
}

export interface User {
    id: string
    role: Roles[]
    name: string
    lastName: string
    phoneNumber: string
    birthDate: Date
    address: Address
    email: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
}
