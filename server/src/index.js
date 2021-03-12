import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api', router)
const port = process.env.PORT || 3000;

app.listen( port, () => console.log(`Server is run on http://localhost:${port}`))
