import { Roles } from '@shared/contracts/entities/user'
import * as yup from 'yup'
import { InferType } from 'yup'

export const createUserSchema = yup.object().shape({
    role: yup.array().of(yup.string().oneOf(Object.values(Roles))).required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    birthDate: yup.date().notRequired(),
    email: yup.string().email().required(),
    address: yup.object().shape({
        street: yup.string().required(),
        number: yup.string().required(),
        neighborhood: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        country: yup.string().required(),
        zipCode: yup.string().notRequired(),
        complement: yup.string().notRequired(),
    }).notRequired(),
}).noUnknown()


export type createUserType = InferType<typeof createUserSchema>
