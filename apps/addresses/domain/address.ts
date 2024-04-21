import { BaseDomain } from '@shared/domain/baseDomain'

export class Address extends BaseDomain {
    street!: string
    number!: string
    neighborhood!: string
    city!: string
    state!: string
    country!: string
    zipCode!: string
    complement?: string
    reference?: string
}
