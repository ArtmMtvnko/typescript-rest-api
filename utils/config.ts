import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI: string | undefined = process.env.MONGODB_URI
const PORT: string | undefined = process.env.PORT