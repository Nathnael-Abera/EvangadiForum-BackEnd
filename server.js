const express = require('express')
const UserRouter = require('./server/api/users/user.router')
const questionRouter = require('./server/api/question/question.route')
const answerRouter = require('./server/api/answer/answer.router')

const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT||3000||80;

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174',
    origin: 'https://6eebdb0e.evangadiforum-frontend-72c.pages.dev/'
}));
response.setHeader("Access-Control-Allow-Origin", "https://6eebdb0e.evangadiforum-frontend-72c.pages.dev");

app.use('/api/users', UserRouter);
app.use('/api/question', questionRouter);
app.use('/api/answer', answerRouter);




app.listen(port,"0.0.0.0",()=>console.log(`listening at http://localhost:${port}`))