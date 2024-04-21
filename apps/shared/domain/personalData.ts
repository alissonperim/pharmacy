import { Address } from '@addresses/domain/address'
import { BaseDomain } from './baseDomain'


export class PersonalData extends BaseDomain {
    name!: string
    lastName!: string
    phoneNumber!: string
    email!: string
    birthDate!: Date
    address?: Address
    addressId?: string
}
