import express from 'express'
import { newDesignHistoryRoutes } from './routes/new-design-history.js'

const router = express.Router()
newDesignHistoryRoutes(router)

export default router
