import express from "express"
import type { Router, Response, Request } from "express"
import cookieParser from "cookie-parser";
import dashbaordRouter from "./dashboard.js";
import workFlowRouter from "./workflow/workflow.js";

import signUpRouter from "./auth/singup.js";
import signInRouter from "./auth/signin.js";

const v1Router: Router = express.Router()

v1Router.use("/signup", signUpRouter)
v1Router.use("/signin", signInRouter)
v1Router.use(cookieParser())
v1Router.use("/dashboard", dashbaordRouter)
v1Router.use("/createFlow", workFlowRouter)

v1Router.get("/", (req: Request,res: Response) => {
    res.send("Hello v1 world!!")
})

export default v1Router