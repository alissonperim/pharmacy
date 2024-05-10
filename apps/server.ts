import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { apiRouter } from  '@routes/usersRoutes'
import { UsersDependenciesInjection } from '@users/dependencyInjection'
import { midiffy } from './middlewares/midiffy'
import { HttpExceptions } from '@shared/httpResponses'

UsersDependenciesInjection.create()

const app = express()

midiffy(app)

app.use(apiRouter)
app.use(HttpExceptions)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
