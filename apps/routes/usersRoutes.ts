import { usersRouter } from '@users/routes'
import { openDbConnection } from 'apps/middlewares/openDbConnection'
import { Router } from 'express'

const router = Router()

router.use('/users', openDbConnection, usersRouter)


export { router as apiRouter }
