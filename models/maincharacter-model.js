const mongoose = require('mongoose');

const maincharacterSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Maincharacter", maincharacterSchema)