const { registerQuestion, questionById, getQuestionByUser, getAllQuestions } = require('./question.service')
const pool = require('../../config/database')
const jwt = require('jsonwebtoken');

module.exports = {
    createQuestion: (req, res) => {
        const {
            question,
            question_description,
            question_code_block,
            tags,
            user_id,
        } = req.body
        if (!question || !question_description || !user_id) {
            res.status(400).json({msg:'Not all fildes have been provided'})
        }
        registerQuestion(req.body, (err, result) => {
            if (err) {
              return  res.status(500).json({msg:'Database connection error'})
            }
              return  res.status(201).json({msg:'Qustion have been create sussesfully',data:result})
                
        })
        
    },
    getQuestions: (req, res) => {
        getAllQuestions((err, result) => {
            if (err) {
                return  res.status(500).json({msg:'Database connection error'})
              }
               return res.status(200).json({msg:'List off Questions',data:result})
        })
        
    },
    getMyQuestion: (req, res) => {
        const { user_id } = req.query.params
        getQuestionByUser(user_id, (err, result) => {
            if (err) {
                return  res.status(500).json({msg:'Database connection error'})
            }
                return res.status(200).json({msg:`ist off Questions of user with id ${user_id}`,data:result})

        })
        
    },
    getById: (req, res) => {
        const { question_id } = req.body;
        questionById(question_id, (err, result) => {
          if (err) {
            return res.status(500).json({ msg: "database connection err" });
          }
          return res.status(200).json({ data: result });
        });
      },

}