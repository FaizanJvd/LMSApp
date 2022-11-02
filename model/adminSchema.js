const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }

});
const adminModel = mongoose.model("admin",adminSchema,"admins");
module.exports = adminModel;