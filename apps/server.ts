import 'reflect-metadata'
import express from 'express'
import { apiRouter } from  '@routes/usersRoutes'
import { UsersDependenciesInjection } from '@users/dependencyInjection'

UsersDependenciesInjection.create()

const app = express()

app.use(express.json())

app.use(apiRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
