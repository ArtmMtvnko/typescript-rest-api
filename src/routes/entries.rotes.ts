import express from "express"
import EntriesController from "../controllers/entries.controller"

const entriesRouter = express.Router()
const entriesController = new EntriesController()

entriesRouter.get("/", entriesController.getAllEntries)

entriesRouter.post("/", entriesController.createEntrie)

export default entriesRouter
// entriesRouter.get("/", (request: Request, response: Response) => {
//     response.send("Test from router")
// })

// entriesRouter.post("/", (request: Request, response: Response) => {
//     const body: IEntrie = request.body

//     const entrie = new Entrie(body)

//     entrie.save()
//         .then(res => {
//             console.log('Entrie saved', res)
//             response.json(res)
//         })
//         .catch(err => console.error(err))
// })
