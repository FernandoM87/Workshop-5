const Maincharacter = require('../../models/maincharacter-model')

module.exports = {
    //Get all ingredients 
    getAll: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.find();
            res.send(maincharacter);
        } catch (error){
            res.status(500).send(error.message)
        }
    },

    //Get one ingredient
    getOne: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.findById(req.params.id);
            res.send(maincharacter);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    //Create ingredient
    create: async (req, res) => {
        const maincharacter = new Maincharacter({
            name: req.body.name,
            description: req.body.description
        })

        try {
            await maincharacter.save();
            res.status(201).send(maincharacter);
        } catch(error) {
            res.status(400).send(error.message);
        }
    },


    //Update ingredient
    //Delete ingredient
    delete: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.findByIdAndDelete(req.params.id);
            res.send(maincharacter);
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}