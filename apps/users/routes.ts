import { Router } from 'express'
import create from './handlers/create'
import { pathParamsValidations, schemaValidations } from '@shared/validations/schemaValidations'
import { createUserSchema } from './handlers/create/schema'
import list from './handlers/list'
import { pathParameter, updateUserSchema } from './handlers/update/schema'
import update from './handlers/update'

const router = Router()

router.post('/', schemaValidations(createUserSchema), create)
router.post('/:id', pathParamsValidations(pathParameter), schemaValidations(updateUserSchema), update)
router.get('/', list)

export { router as usersRouter }
