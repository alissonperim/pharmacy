import { Address } from './address'

export interface User {
    id: string
    name: string
    lastName: string
    phoneNumber: string
    birthDate: Date
    address: Address
    email: string
    password: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
}
