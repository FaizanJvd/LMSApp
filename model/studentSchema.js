const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    }

});
const studentModel = mongoose.model("student",studentSchema,"students");
module.exports = studentModel;