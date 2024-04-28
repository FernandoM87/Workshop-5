const Maincharacter = require('../../models/maincharacter-model')

module.exports = {

    //Show all
    showAll: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.find().lean();
            res.render("maincharacter/index", { maincharacter })

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Show one
    showOne: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.findById(req.params.id);
            res.render("maincharacter/single", maincharacter)

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Show create form

    showCreateForm: async (req, res) => {
        res.render("maincharacter/new");
    },

    //Create maincharacter

    create: async (req, res) => {
        const maincharacter = new Maincharacter({
            name: req.body.name,
            description: req.body.description,
        })

        try {
            await maincharacter.save();

            res.redirect('/maincharacter');
        } catch (error) {
            res.render("maincharacter/new", {error: error.message});
        }
    },

    //Show edit form

    showEditForm: async (req, res) => {
        try {
            const maincharacter = await Maincharacter.findById(req.params.id);
            res.render("maincharacter/edit", maincharacter)

        } catch (error) {
            res.render("error", { message:error.message })
        }
    },

    //Update ingredient

    update: async (req, res) => {
        try {
            await Maincharacter.findOneAndUpdate({_id: req.params.id}, req.body);

            res.redirect('/maincharacter');

        } catch (error) {
            res.render("maincharacter/edit", {error: error.message});
        }
    },

    //Delete ingredient

    delete: async (req, res) => {
        try {
            await Maincharacter.findOneAndDelete({_id: req.params.id}, req.body);

            res.redirect('/maincharacter');

        } catch (error) {
            res.render("maincharacter/edit", {error: error.message});
        }
    },
}