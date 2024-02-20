import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONG)
.then(()=>{
    console.log("Mongodb is connected");

})
.catch((err)=>{
    console.log(err)
})

const app = express();

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})