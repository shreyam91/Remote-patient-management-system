import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

const corsoptions = {
    origin:true
}

app.get('/', (req,res)=>{
    res.send('Api is working')
})

    // database connection 
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB connection established')
    }catch(err){
        console.log('Error connecting to MongoDB')
    }
}

        // middleware 
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsoptions));
app.use('/api/v1/auth', authRoute)  //domain/api/v1/auth/register

app.listen(port, ()=>{
    connectDB()
    console.log('Server is running on port' + port)
})
