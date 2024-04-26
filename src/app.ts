import express, { Express, Request, Response } from 'express'
const app: Express = express()

import { connect, connection } from 'mongoose'
import entriesRouter from './routes/entries.rotes'
import config from './utils/config'
import cors from 'cors'


console.log('Connectiong to MongoDB...')
connect(config.MONGODB_URI!) // also can be used 'config.MONGODB_URI as string'
    .then(() => console.log('Successfuly connected to MongoDB'))
    .catch(err => console.error(err))

app.use(cors())
app.use(express.json())

app.get("/", (request: Request, response: Response) => {
    response.send("HELLOOOOOOO")
})

app.use("/api/entries", entriesRouter)

// TODO: add nodemon and tsc --watch
// TODO: add middleware

export default app