import express from "express"
import EntriesController from "../controllers/entries.controller"

const entriesRouter = express.Router()
const entriesController = new EntriesController()

entriesRouter.get("/", entriesController.getAllEntries)

entriesRouter.post("/", entriesController.createEntrie)

export default entriesRouter
