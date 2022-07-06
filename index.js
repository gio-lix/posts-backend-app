import express from "express"
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors"
import dotenv from "dotenv"
import {PostsControllers} from "./controllers/index.js"


dotenv.config({path: ".env"})

const port = process.env.PORT || 9000

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Error", err))

const app = express()
app.use(express.json())
app.use(cors())





app.get("/", PostsControllers.getAll)


app.listen(port, () => {
    console.log("Server Is Running On Port 9000")
})