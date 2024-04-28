import { Router } from 'express'
import create from './handlers/create'

const router = Router()

router.post('/', create)

export { router as usersRouter }
