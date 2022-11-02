const mongoose = require('mongoose');
const assignmentMarksSchema = new mongoose.Schema({
    marks:{
        type:Number
    },
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: 'attemptQuiz'
    }
});
const assignmentMarksModel = mongoose.model("assignmentMark",assignmentMarksSchema,"assignmentMarks");
module.exports = assignmentMarksModel;