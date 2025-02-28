import { GoogleGenerativeAI } from "@google/generative-ai";
// import { prompt } from "./prompt";
import express from "express"
import cors from "cors"
import fs from "fs";

const app = express()

app.use( cors() )
app.use( express.json() )

import dotenv from "dotenv"
dotenv.config()


const API_KEY = process.env.GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI( API_KEY );

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";


// app.get("/", async ( req: any, res : any ) => {

//     const prompt = req.query.prompt
//     //console.log( req.query )

//     if ( !prompt) {
//         return res.send( "No prompt. Please insert prompt to proceed." )
//     }
//     const result = await model.generateContent(prompt);
//     const reply = result.response.text()
//     //console.log( result.response.usageMetadata )
//     return res.send( reply )
// } )

app.post("/", async ( req: any , res: any ) => {
    const input = req.body.input
    let template = `List 5 example details of the following using this schema: Details of the schema is given below. The reply must be in json format. `
    const prompt = template + input

    if ( !input) {
        return res.send( "No prompt. Please insert prompt to proceed." )
    }
    const result = await model.generateContent(prompt);
    const reply = result.response.text()

    function replyToJson( reply : string ) { return reply.slice( reply.indexOf("["), reply.lastIndexOf("]") + 1) }

    const jsonReply = replyToJson( reply )

    
    console.log( jsonReply )
    
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    const modelName = `export const Model_${uniqid} = `

    fs.writeFile(`src/routes/${uniqid}.ts`, modelName + jsonReply, ( err ) => {
        if ( err ) { 
            console.log(err)
            return
        }
        console.log(" File written successfully")
    })
    return res.send( reply )
})

app.listen("3000")