import { Roles } from '@shared/contracts/entities/user'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'
import { InferType } from 'yup'

const addressSchema = yup.object().shape({
    street: yup.string().optional(),
    number: yup.string().optional(),
    neighborhood: yup.string().optional(),
    city: yup.string().optional(),
    state: yup.string().optional(),
    country: yup.string().optional(),
    zipCode: yup.string().notRequired(),
    complement: yup.string().notRequired(),
}).noUnknown().optional().nullable().default(undefined)


const userSchema = yup.object().shape({
    roles: yup.array().of(yup.string().oneOf(Object.values(Roles))).optional(),
    name: yup.string().optional(),
    lastName: yup.string().optional(),
    phoneNumber: yup.string().optional(),
    birthDate: yup.date().notRequired(),
    address: addressSchema,
    email: yup.string().email().optional(),
}).noUnknown()

export const updateUserSchema = yup.object().shape({
    id: yup.string().test('test valid user id', 'The id must be in id pattern', (value) => value.startsWith(DOMAIN.USER, 0)),
    userSchema,
})

export type UpdateUserRequestParams = InferType<typeof updateUserSchema>
