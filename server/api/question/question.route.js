const express = require('express')
const router = require('express').Router();
const auth = require('../middleware/auth');
const { createQuestion, getQuestions,getMyQuestion,getById} = require('./question.controller');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

router.post('/', createQuestion);
router.get('/', getQuestions);
router.post('/id', getById);

module.exports = router;