import express from "express"
import type { Router, Response, Request } from "express"
import cookieParser from "cookie-parser";
import dashbaordRouter from "./dashboard.js";
import workFlowRouter from "./workflow/workflow.js";
import credentialsRouter from "./credentials/credentials.js";
import excecutionRouter from "./exec/exec.js";


import signUpRouter from "./auth/singup.js";
import signInRouter from "./auth/signin.js";

const v1Router: Router = express.Router()

v1Router.use("/signup", signUpRouter)
v1Router.use("/signin", signInRouter)
v1Router.use(cookieParser())
v1Router.use("/dashboard", dashbaordRouter)
v1Router.use("/workflow", workFlowRouter)
v1Router.use("/credentials", credentialsRouter)
v1Router.use("/excecution", excecutionRouter)
// v1Router.use("/email", emailRouter)

v1Router.get("/", (req: Request,res: Response) => {
    res.send("Hello v1 world!!")
})

export default v1Router