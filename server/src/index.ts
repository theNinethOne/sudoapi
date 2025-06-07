import { GoogleGenerativeAI } from "@google/generative-ai";
// import { prompt } from "./prompt";
import express from "express"
import cors from "cors"
import fs from "fs";

const app = express()

app.use(cors())
app.use(express.json())

import dotenv from "dotenv"
dotenv.config()


const API_KEY = process.env.GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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

app.post("/", async (req: any, res: any) => {
    const input = req.body.input
    let template = `List 5 example details of the following using this schema: Details of the schema is given below. The reply must be in json format. `
    const prompt = template + input
    //const prompt = "write a story on cats"

    console.log(input)

    if (!input) {
        return res.send("No prompt. Please insert prompt to proceed.")
    }

    const result = await model.generateContent(prompt);
    const reply = result.response.text()

    function replyToJson(reply: string) { return reply.slice(reply.indexOf("["), reply.lastIndexOf("]") + 1) }

    const jsonReply = replyToJson(reply)

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    const modelName = ""//`export const Model_${uniqid} = `

    const writeData = `${modelName} { "inputTemplate": ${input}, "details":{}, "data": ${jsonReply} }`

    fs.writeFile(`src/routes/${uniqid}.json`, writeData, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(" File written successfully")
    })
    return res.send(uniqid)


    // for (let attempt = 0; attempt < 5; attempt++) {
    //     let delay  = 1000;
    //     try {

    //         console.log(attempt)

    //    ---- MAIN CODE HERE ----




    //     } catch (error : any ) {
    //         if ( error.status  === 503 && attempt <5 ) {
    //             console.warn(`Model overloaded (503). Retrying in ${delay / 1000} seconds...`);
    //             await new Promise(resolve => setTimeout(resolve, delay));
    //             delay *= 2; 
    //         } else {    
    //             console.error('Error calling Gemini API:', error);
    //             throw error; //
    //         }
    //     }
    //     throw new Error('Max retries reached. Gemini model remains overloaded.');
    // }



})

/////////////////// Route Relay

app.get("/routes", async (req: any, res: any) => {
    const modelId = req.query.modelId;
    //console.log( req.query )
    fs.readFile(`src/routes/${modelId}.json`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const modifiedData = data.slice(data.lastIndexOf("["), data.indexOf("]") + 1)
        console.log(data)
        //console.log( modifiedData )
        return res.send(data)
    })
})

app.listen("3000")