// Dependancies //
import { json } from 'body-parser';
import express from 'express';
import userRoutes from './server/routes/user.routes.js';
import dotenv from 'dotenv'
import subscribeRoutes from "./server/routes/subscribe.routes";
dotenv.config()
const app = express();
const port = 3000 || process.env.PORT;

// Routing //
app.use(json());
app.use('api/user', userRoutes)
app.use('api/subscribe', subscribeRoutes)
app.get('/',(req,res)=> res.send('Hello World'));
app.listen(port);

