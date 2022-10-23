import express from 'express'
import { newDesignHistoryRoutes } from './routes/new-design-history.js'
import { newUserRoutes } from './routes/new-user.js'

const router = express.Router()
newDesignHistoryRoutes(router)
newUserRoutes(router)

export default router
