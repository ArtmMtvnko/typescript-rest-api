import express, { Express, Request, Response } from 'express'
import entrieRouter from './controllers/entries'


const app: Express = express()
const port: number = 8000

import './model/Entrie'

app.get("/", (request: Request, response: Response) => {
    response.send("HELLOOOOOOO")
})

app.use("/api/entries", entrieRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}\nlink: http://localhost:${port}`)
})