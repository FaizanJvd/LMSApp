const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }

});
const teacherModel = mongoose.model("teacher",teacherSchema,"teachers");
module.exports = teacherModel;