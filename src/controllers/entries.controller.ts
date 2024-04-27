import express, { Express, Router, Request, Response} from 'express'
import { IEntrie, Entrie } from '../model/Entrie'

export default class EntriesController {
    constructor() {}

    public getAllEntries = async (request: Request, response: Response) => {
        try {
            const entries = await Entrie.find<IEntrie[]>({})
            response.status(200).json(entries)
        } catch (err) {
            response.status(404).json({ message: (err as Error).message })
        }
    }

    public getEntrie = async (request: Request, response: Response) => {
        try {
            const id: string = request.params.id
            const entrie = await Entrie.findById<IEntrie>(id)
            response.status(200).json(entrie)
        } catch (err) {
            response.status(404).json({ message: (err as Error).message })
        }
    }

    public createEntrie = async (request: Request, response: Response) => {
        const body = request.body as IEntrie
        const entrie = new Entrie(body)
        
        try {
            const res = await entrie.save()
            console.log('Entrie has been saved!', res)
            response.status(201).json(res)
        } catch (err) {
            response.status(400).json({ message: (err as Error).message })
        }
    }
}