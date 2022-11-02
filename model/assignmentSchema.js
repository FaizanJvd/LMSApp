const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema({
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
const assignmentModel = mongoose.model("assignment",assignmentSchema,"assignments");
module.exports = assignmentModel;