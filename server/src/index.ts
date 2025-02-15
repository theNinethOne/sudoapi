import { GoogleGenerativeAI } from "@google/generative-ai";
// import { prompt } from "./prompt";
import express from "express"
import cors from "cors"

const app = express()

app.use( cors() )
app.use( express.json() )

import dotenv from "dotenv"
dotenv.config()


const API_KEY = process.env.GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI( API_KEY );

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";


app.get("/", async ( req: any, res : any ) => {

    const prompt = req.query.prompt
    console.log( req.query )

    if ( !prompt) {
        return res.send( "No prompt. Please insert prompt to proceed." )
    }
    const result = await model.generateContent(prompt);
    const reply = result.response.text()
    console.log( result.response.usageMetadata )
    return res.send( reply )
} )

app.listen("3000")