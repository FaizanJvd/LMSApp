const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teacher:{
        type: mongoose.Types.ObjectId,
        ref: 'teacher'
    },
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'student'
            }
        }]
    }

});
const classModel = mongoose.model("class",classSchema,"classes");
module.exports = classModel;