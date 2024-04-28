const Contact = require('./../models/contact-model');

module.exports = {

    getAllContacts: async (req, res) => {
        try {
            const contacts = await Contact.find();

            res.send(contacts);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    },

    createContact: async (req, res) => {
        try {
            const { name, phone } = req.body;

            const contact = await Contact.create({ name, phone });

            res.status(201).send(contact);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    },
};