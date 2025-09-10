import express from "express"
import type {Request, Response, Router} from "express"
import v1Router from "./v1Router.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))
app.use("/api/v1", v1Router)

app.get("/", (req: Request,res: Response)=> {
    res.send("Hello World")
})

app.listen(3030)