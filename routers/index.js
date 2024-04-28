const express = require('express');
const router = express.Router();


const authRouter = require('./auth-router');
const contactRouter = require('./contact-router');

router.use('/api/auth', authRouter);
router.use('/api/contacts', contactRouter);

module.exports = router; 