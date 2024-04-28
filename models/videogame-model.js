const mongoose = require('mongoose');

const videogameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String, 
        requiered: false
    },
    maincharacter:[
        {
            quantity: String,
            maincharacter: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Maincharacter"
            }
        }
    ]
});

module.exports = mongoose.model("Videogame", videogameSchema)