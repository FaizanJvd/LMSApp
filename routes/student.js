const express = require("express");
const router = express.Router();
const Quiz = require("../model/quizSchema");
const Assignment = require("../model/assignmentSchema");
const AttempQuiz = require("../model/attemptedQuizSchema");
const AttempAssignment = require("../model/attemptAssignmentSchema");
const QuizMarks = require('../model/quizMarksSchema');
const assignmentMarks = require('../model/assignmentMarksSchema');
const multer = require('multer');
const attemptQuiz= multer({
    limits:{
      fileSize:22000000
    },
    fileFilter(req,file,cb){
      if(!file.originalname.endsWith('.docx'))
      return cb(new Error('.doc format is required'))
      cb(undefined,true);
    }
  });
  const attemptAssignment= multer({
    limits:{
      fileSize:22000000
    },
    fileFilter(req,file,cb){
      if(!file.originalname.endsWith('.docx'))
      return cb(new Error('.doc format is required'))
      cb(undefined,true);
    }
  });

router.post('/submit/attemptQuiz/:q_id/:s_id',attemptQuiz.single('attemptQuiz'),function(req,res){
    const attemptQuiz = new AttempQuiz({
        file:req.file.buffer,
        quiz:req.params.q_id,
        student:req.params.s_id
      });
      attemptQuiz.save().then(()=>res.send("upload success")).catch(err=>{res.send(err)});
});

router.post('/submit/attemptAssignment/:a_id/:s_id',attemptAssignment.single('attemptAssignment'),function(req,res){
    const attemptQuiz = new AttempAssignment({
        file:req.file.buffer,
        assignment:req.params.a_id,
        student:req.params.s_id
      });
      attemptAssignment.save().then(()=>res.send("upload success")).catch(err=>{res.send(err)});
});

router.get('/view/quiz/:q_id',function(req,res){
    res.send(Quiz.findById({_id:req.params.q_id}));
});

router.get('/view/assignment/:a_id',function(req,res){
    res.send(Assignment.findById({_id:req.params.a_id}));
});

router.get('/view/quizMarks/:m_id',function(req,res){
  QuizMarks.find().where({ quiz:req.params.m_id}).select('marks').exec(function(error, results) {
    if (error) {
        return res.send(error);
    }
    // Respond with valid data
    res.json(results);
});
});

router.get('/view/AssignmentMarks/:m_id',function(req,res){
  assignmentMarks.find().where({ quiz:req.params.m_id}).select('marks').exec(function(error, results) {
    if (error) {
        return res.send(error);
    }
    // Respond with valid data
    res.json(results);
});
});

module.exports = router;