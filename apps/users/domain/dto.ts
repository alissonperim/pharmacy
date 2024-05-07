import { User } from '@users/domain/user'
import { User as UserDomain } from '@shared/contracts'

export const userDto = ({
    birthDate,
    createdAt,
    email,
    id,
    name,
    lastName,
    phoneNumber,
    roles,
    updatedAt,
    address,
    createdBy,
    deletedAt,
    updatedBy,
    deletedBy,
}: User): UserDomain  => {
    return {
        id,
        name,
        lastName,
        birthDate,
        phoneNumber,
        address,
        email,
        roles,
        createdBy,
        updatedBy,
        deletedAt,
        deletedBy,
        createdAt,
        updatedAt,
    }
}
