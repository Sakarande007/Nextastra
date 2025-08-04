import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import helmet, { crossOriginResourcePolicy } from "helmet";
import morgan from "morgan";
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'


const app = express();
app.use(cors({
    credentials: true,
    origin : process.env.FRONTEND_URL
}));
//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet({
    crossOriginResourcePolicy : false}
));
app.use(morgan("common"));

//Routes

//Start Server
const PORT = 8080 || process.env.PORT;

app.get("/", (request, response) => {
    response.json({
        message : "Server is running " + PORT
    }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)});

app.use('/api/user', userRouter)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running on port",PORT)
    
    })
    
});