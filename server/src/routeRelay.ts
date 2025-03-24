import express from "express"
import cors from "cors"
import fs from "fs";

const app = express()

app.use( cors() )
app.use( express.json() )

import dotenv from "dotenv"
dotenv.config()



