import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import PostRoutes from './routes/post.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();


mongoose.connect(process.env.MONG)
.then(()=>{
    console.log("Mongodb is connected");

})
.catch((err)=>{
    console.log(err)
})

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post',PostRoutes);
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })

})
