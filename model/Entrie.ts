import { Schema, model, connect, connection } from 'mongoose'

type TypeAddres = {
    country: string,
    city: string
}

export interface IEntrie {
    name: string
    age: number
    addres: TypeAddres
}

const entrieSchema = new Schema<IEntrie>({
    name: String,
    age: Number,
    addres: {
        country: String,
        city: String
    }
})

export const Entrie = model<IEntrie>('Entrie', entrieSchema)

// ===============================
const entrie: IEntrie = {
    name: 'Test',
    age: 42,
    addres: {
        country: 'UK',
        city: 'London'
    }
}