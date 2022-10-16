import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'

const router = express.Router()
exampleWizardRoutes(router)

export default router
