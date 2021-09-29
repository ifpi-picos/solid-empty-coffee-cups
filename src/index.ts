import express from 'express'

import { classesRoutes } from './routes/classes.routes'
import { coursesRoutes } from './routes/couses.routes'
import { teachersRoutes } from './routes/teachers.routes'

const app = express()

app.use(express.json())

app.use('/teachers', teachersRoutes)
app.use('/classes', classesRoutes)
app.use('/courses', coursesRoutes)
export { app }
