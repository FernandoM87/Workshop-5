const VideoGame = require('../../models/videogame-model')

module.exports = {
    //Get all ingredients
    getAll: async (req, res) => {
        try {
            const game = await VideoGame.find();
            res.send(game);
        } catch (error){
            res.status(500).send(error.message)
        }
    },

    //Get one ingredient
    getOne: async (req, res) => {
        try {
            const game = await VideoGame.findById(req.params.id);
            res.send(game);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    //Create ingredient
    create: async (req, res) => {
        const game = new VideoGame({
            title: req.body.title,
            description: req.body.description
        })

        try {
            await game.save();
            res.status(201).send(game);
        } catch(error) {
            res.status(400).send(error.message);
        }
    },

    //Update ingredient
    //Delete ingredient
    delete: async (req, res) => {
        try {
            const game = await VideoGame.findByIdAndDelete(req.params.id);
            res.send(game);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
}