import express from 'express'

import { teachersRoutes } from './routes/teachers.routes'
// import { usersRoutes } from './routes/users.routes'

const app = express()

app.use(express.json())

// app.use('/users', usersRoutes)
app.use('/teachers', teachersRoutes)

export { app }
