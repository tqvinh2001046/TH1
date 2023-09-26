import dotenv from "dotenv"
import express from 'express'
import configViewEngine from "./configs/viewEngine"
import initWebRoute from './route/webRoute'
import path from 'path'
const app = express()

dotenv.config()
configViewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))

initWebRoute(app)

const port = process.env.PORT


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
