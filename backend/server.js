import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from "./routes/userRoutes.js";

dotenv.config();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

mongoose.connect(process.env.DB_URL)
    .then(()=> console.log("Database is Connected successfully...!!!"))
    .catch(err => console.log(err));

app.get('/',(req,res)=>{
    res.send("Hello World!!!");
})

app.use('/api/auth',userRoute); 

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log("Server started....")); 