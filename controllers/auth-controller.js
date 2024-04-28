const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

module.exports = {
    
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const existingUser = await User.findOne({ email });

            if(existingUser){
                res.status(409).send("Email already exists");
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await User.create({name, email, password: hashedPassword});
            
            res.sendStatus(201);

        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error!")
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email }).select("+password");

            if(!user){
                res.status(400).send("Invalid credentials");
                return;
            }

            const conrrectPassword = await bcrypt.compare(password, user.password);  //

            if(!conrrectPassword){
                res.status(400).send("Invalid credentials");
                return;
            }

            const payload = {
                id: user._id,
                role: "ADMIN",
                name: user.name,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.send({ token} )

        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error!")
        }
    }
};