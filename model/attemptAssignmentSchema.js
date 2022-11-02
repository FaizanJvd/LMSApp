const mongoose = require('mongoose');
const attemptAssignmentSchema = new mongoose.Schema({
    file:{
        type:Buffer
    },
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: 'quiz'
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'student'
    },

});
const attemptAssignmentModel = mongoose.model("attemptAssignment",attemptAssignmentSchema,"attemptAssignments");
module.exports = attemptAssignmentModel;