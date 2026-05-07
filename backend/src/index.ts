import "dotenv/config";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { HTTPSTATUS } from "./config/http.config";
import { Env } from "./config/env.config";







const app = express();

app.use(
  cors({
    origin: [Env.FRONTEND_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)



app.use(express.json({ limit: "10mb" }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get("/health", async (req: Request, res: Response) => {
  res.status(HTTPSTATUS.OK).json({
    message: "Server is healthy",
    status: "Ok"
  })

})





app.listen(Env.PORT, async () => {
  
  console.log(`Server running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
})