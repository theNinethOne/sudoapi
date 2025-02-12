import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "./prompt";
import express from "express"

const app = express()

import dotenv from "dotenv"
dotenv.config()


const API_KEY = process.env.GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI( API_KEY );

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";


app.get("/", async ( req, res : any ) => {


    const result = await model.generateContent(prompt);
    const reply = result.response.text()
    return res.send( reply )
} )

app.listen("3000")