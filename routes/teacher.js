const express = require("express");
const router = express.Router();
const Quiz = require("../model/quizSchema");
const Lecture = require('../model/lecture');
const AttempQuiz = require("../model/attemptedQuizSchema");
const QuizMarks = require("../model/quizMarksSchema");
const Assignment = require("../model/assignmentSchema");
const AttempAssignment = require("../model/attemptAssignmentSchema");
const AssignmentMarks = require("../model/assignmentMarksSchema");
const multer = require('multer');
const uploadFiles = multer({
  limits:{
    fileSize:22000000
  },
  fileFilter(req,file,cb){
    if(!file.originalname.endsWith('.docx'))
    return cb(new Error('.doc format is required'))
    cb(undefined,true);
  }
})
const LectureMaterial= multer({
  limits:{
    fileSize:220000000
  },
  fileFilter(req,file,cb){
    if(!file.originalname.endsWith('.pptx'))
    return cb(new Error('.ppt format is required'))
    cb(undefined,true);
  }
});


router.post("/uplaod/quiz",uploadFiles.single('uploadFile'), function (req, res) {//OK
      const quiz = new Quiz({
        title:req.body.title,
        file:req.file.buffer
      });
      quiz.save().then(()=>res.send("upload success")).catch(err=>{res.send(err)});
});


router.get("/view/attemptedQuiz", function (req, res) {
  res.send(AttempQuiz.find());
});


router.get("/download/attemptquiz/:id", function (req, res) {
  const quiz = AttempQuiz.findOne({ _id: req.params.id }).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.download(quiz.file);
  });
});


router.delete('/delete/quiz/:id',function(req,res){//OK
  Quiz.findByIdAndDelete({_id:req.params.id} ).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.send("deleted");
  });
});


router.post('/add/quizMarks/:aq_id/:marks',function(req,res){//OK
  QuizMarks.create({marks:req.params.marks,quiz:req.params.aq_id});
  res.send('Marks Added');
});


router.put('/update/quizMarks/:id/:marks',function(req,res){//OK
  QuizMarks.updateOne({ _id: req.params.id}, { $set: { marks: req.params.marks } })
});


router.delete('/delete/quizMarks/:id',function(req,res){
  QuizMarks.findByIdAndDelete(req.params.id ).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.send("deleted");
  });
});


router.post("/uplaod/lecture/:t_id/:c_id",LectureMaterial.single('lecture'),function (req, res) {//Ok
      const lecture = new Lecture({
        title:req.body.title,
        file:req.file.buffer,
        teacher:req.params.t_id,
        class:req.params.c_id
        });
      lecture.save().then(()=>res.send("upload success")).catch(err=>{res.send(err)});
});

router.get("/view/attemptedAssignment", function (req, res) {
  res.send(AttempAssignment.find());
});

router.get("/download/attemptAssignment/:id", function (req, res) {
  const assignment = AttempAssignment.findOne({ _id: req.params.id }).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.download(assignment.file);
  });
});

router.delete('/delete/assignment/:id',function(req,res){
  Assignment.findByIdAndDelete(req.params.id ).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.send("deleted");
  });
});

router.post('/add/assignmentMarks/:id/:marks',function(req,res){
  const quiz_id  = AttempAssignment.findById(req.params.id);
  AssignmentMarks.create({marks:req.params.marks,assignment:assignment_id._id});
});

router.put('/update/assignmentMarks/:id/:marks',function(req,res){
  AssignmentMarks.updateOne({ _id: req.params.id}, { $set: { marks: req.params.marks } })
});

router.delete('/delete/assignmentMarks/:id',function(req,res){//Ok
  AssignmentMarks.findByIdAndDelete({_id:req.params.id}).exec(function (error) {
    if (error) {
      return next(error);
    }
    res.send("deleted");
  });
});

module.exports = router;
