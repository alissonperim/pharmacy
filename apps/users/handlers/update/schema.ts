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


export const updateUserSchema = yup.object().shape({
    roles: yup.array().of(yup.string().oneOf(Object.values(Roles))).optional(),
    name: yup.string().optional(),
    lastName: yup.string().optional(),
    phoneNumber: yup.string().optional(),
    birthDate: yup.date().notRequired(),
    address: addressSchema,
    email: yup.string().email().optional(),
}).noUnknown()

export const pathParameter = yup.object().shape({
    id: yup.string().test('test valid user id', 'The pathParameter must be in id pattern', (value) => value.startsWith(DOMAIN.USER, 0)),
})

export type UpdateUserRequestParams = InferType<typeof updateUserSchema>
export type UpdateUserPathParams = InferType<typeof pathParameter>
