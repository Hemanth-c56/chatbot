import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import Connection from "./db/db.js"

const app = express();

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

Connection();

app.use('/',route);

app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})