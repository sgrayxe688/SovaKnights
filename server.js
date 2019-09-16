// Dependancies //
require('dotenv').config();
import './connections';
import express from 'express';
const app = express();
const port = 3000 || process.env.PORT;
const userRoutes = require('./server/routes/users.routes');
import { json } from 'body-parser';

app.use(json());
app.use('api/user', userRoutes)
app.get('/',(req,res)=> res.send('Hello World'));






app.listen(port);