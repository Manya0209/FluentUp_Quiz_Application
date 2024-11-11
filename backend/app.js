import express from 'express';
import {userRoute} from './modules/user/routes/user-routes.js';
import { quizRoute } from './modules/quiz/routes/quiz-routes.js';
import cors from 'cors';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
import crypto from 'crypto';
import mongoose from './shared/db/connection.js';
import cookieParser from 'cookie-parser';
import { restrictToLoggedinUserOnly } from './shared/middlewares/auth-middleware.js';

const app= express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json()); //data fetch (json)
app.use(cookieParser());

app.use('/', userRoute);
app.use('/',  quizRoute);


// const secretKey = crypto.randomBytes(32).toString('hex');

// const MongoStore = ConnectMongo.create({
//   mongoUrl: 'mongodb+srv://manyabbr0209:HkqthBm0LNxHKcMA@cluster0.b0ntkf3.mongodb.net/userdata?retryWrites=true&w=majority',
//   mongooseConnection: mongoose.connection,
//   ttl: 60 * 60 * 24 // Session expiration time (1 day)
// });

// app.use(session({
//   secret: secretKey,
//   resave: false,
//   saveUninitialized: true,
//   store: MongoStore 
// }));

const server= app.listen(1234, (err)=>{
    if (err){
        console.log('Server Crash', err)
    }
    else{
    console.log("Server Up and Running", 
    server.address().port);
    }
})