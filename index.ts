import app from './app'
import config from './utils/config'

const PORT: number = Number(config.PORT)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}\nLink: http://localhost:${PORT}`)
})