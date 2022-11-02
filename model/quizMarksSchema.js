const mongoose = require('mongoose');
const quizMarksSchema = new mongoose.Schema({
    marks:{
        type:Number
    },
    quiz: {
        type: mongoose.Types.ObjectId,
        ref: 'attemptQuiz'
    }
});
const quizMarksModel = mongoose.model("quizMark",quizMarksSchema,"quizMarks");
module.exports = quizMarksModel;