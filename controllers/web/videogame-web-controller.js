const VideoGame = require('../../models/videogame-model')

module.exports = {

    //Show all
    showAll: async (req, res) => {
        try {
            const videogame = await VideoGame.find().lean();
            res.render("videogame/index", { videogame })

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Show one
    showOne: async (req, res) => {
        try {
            const videogame = await VideoGame.findById(req.params.id);
            res.render("videogame/single", videogame)

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },
}