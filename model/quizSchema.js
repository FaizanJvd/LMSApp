const { contentType } = require('express/lib/response');
const mongoose = require('mongoose');
const quizSchema = new mongoose.Schema({
    title:{
        type:String
    },
    file:{
        type:Buffer
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'teacher'
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'class'
    },

});
const quizModel = mongoose.model("quiz",quizSchema,"quizs");
module.exports = quizModel;