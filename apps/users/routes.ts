import { Router } from 'express'
import create from './handlers/create'
import { schemaValidations } from '@shared/validations/schemaValidations'
import { createUserSchema } from './handlers/create/schema'

const router = Router()

router.post('/', schemaValidations(createUserSchema), create)

export { router as usersRouter }
