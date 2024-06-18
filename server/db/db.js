import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const Connection = ()=>{
    const database_uri = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

    mongoose.connect(database_uri).then(()=>{
        console.log("Database Connection Successfull!");
    })
}

export default Connection;