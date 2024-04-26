import express, { Express, Router, Request, Response} from 'express'
import { IEntrie, Entrie } from '../model/Entrie'

const entriesRouter: Router = express.Router()

entriesRouter.get("/", (request: Request, response: Response) => {
    response.send("Test from router")
})

entriesRouter.post("/", (request: Request, response: Response) => {
    const body: IEntrie = request.body

    const entrie = new Entrie(body)

    entrie.save()
        .then(res => {
            console.log('Entrie saved', res)
            response.json(res)
        })
        .catch(err => console.error(err))
})

export default entriesRouter