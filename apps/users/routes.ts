import { Router } from 'express'
import create from './handlers/create'
import { schemaValidations } from '@shared/validations/schemaValidations'
import { createUserSchema } from './handlers/create/schema'
import list from './handlers/list'

const router = Router()

router.post('/', schemaValidations(createUserSchema), create)
router.get('/', list)

export { router as usersRouter }
