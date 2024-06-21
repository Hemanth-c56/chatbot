import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import Connection from "./db/db.js"
import router from "./routes/userRoutes.js";
import HttpError from "./models/httpError.js";

const app = express();

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


Connection();

app.use('/api/users',router);

app.use((req,res,next)=>{
    const error = new HttpError("Could not find this route", 404);
    throw error;
})

app.use((error, req, res, next)=>{
    if(res.headerSend){
        return next(error);
    }
    else{
        res.status(error.code || 500).json({
            message : error.message || "An unknown error occured"
        })
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${process.env.PORT}`);
})