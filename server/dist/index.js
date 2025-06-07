"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
// import { prompt } from "./prompt";
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.GEMINI_API_KEY || "";
const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
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
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const input = req.body.input;
    let template = `List 5 example details of the following using this schema: Details of the schema is given below. The reply must be in json format. `;
    const prompt = template + input;
    //const prompt = "write a story on cats"
    console.log(input);
    if (!input) {
        return res.send("No prompt. Please insert prompt to proceed.");
    }
    const result = yield model.generateContent(prompt);
    const reply = result.response.text();
    function replyToJson(reply) { return reply.slice(reply.indexOf("["), reply.lastIndexOf("]") + 1); }
    const jsonReply = replyToJson(reply);
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    const modelName = ""; //`export const Model_${uniqid} = `
    const writeData = `${modelName} { "inputTemplate": ${input}, "details":{}, "data": ${jsonReply} }`;
    fs_1.default.writeFile(`src/routes/${uniqid}.json`, writeData, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(" File written successfully");
    });
    return res.send(uniqid);
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
}));
/////////////////// Route Relay
app.get("/routes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modelId = req.query.modelId;
    //console.log( req.query )
    fs_1.default.readFile(`src/routes/${modelId}.json`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const modifiedData = data.slice(data.lastIndexOf("["), data.indexOf("]") + 1);
        console.log(data);
        //console.log( modifiedData )
        return res.send(data);
    });
}));
app.listen("3000");
