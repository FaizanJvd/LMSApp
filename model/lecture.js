const mongoose = require('mongoose');
const lectureSchema = new mongoose.Schema({
    title:{
        type:String
    },
    file: {
        type:Buffer
    },
    teacher:{
        type: mongoose.Types.ObjectId,
        ref: 'teacher'
    },
    class:{
        type: mongoose.Types.ObjectId,
        ref: 'class'
    }
});
const lectureModel = mongoose.model("lecture",lectureSchema,"lectures");
module.exports = lectureModel;