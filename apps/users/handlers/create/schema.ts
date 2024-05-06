import { Roles } from '@shared/contracts/entities/user'
import * as yup from 'yup'
import { InferType } from 'yup'

const addressSchema = yup.object().shape({
    street: yup.string().required(),
    number: yup.string().required(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    zipCode: yup.string().notRequired(),
    complement: yup.string().notRequired(),
}).noUnknown().optional().nullable().default(undefined)

// const addressSchema = yup.object().when('__provider', {
//     is: 'address',
//     then: yup.object().shape({
//         street: yup.string().required(),
//         number: yup.string().required(),
//         neighborhood: yup.string().required(),
//         city: yup.string().required(),
//         state: yup.string().required(),
//         country: yup.string().required(),
//         zipCode: yup.string().notRequired(),
//         complement: yup.string().notRequired(),
//     }).noUnknown().optional().nullable(),
//     otherwise: yup.object().notRequired(),
// })

export const createUserSchema = yup.object().shape({
    role: yup.array().of(yup.string().oneOf(Object.values(Roles))).required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    birthDate: yup.date().notRequired(),
    address: addressSchema,
    email: yup.string().email().required(),
}).noUnknown()


export type createUserType = InferType<typeof createUserSchema>
