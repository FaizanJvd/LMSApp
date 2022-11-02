const mongoose = require('mongoose');
const attemptQuizSchema = new mongoose.Schema({
    file:{
        type:Buffer
    },
    quiz: {
        type: mongoose.Types.ObjectId,
        ref: 'quiz'
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'student'
    },

});
const attemptQuizModel = mongoose.model("attemptQuiz",attemptQuizSchema,"attemptQuizs");
module.exports = attemptQuizModel;