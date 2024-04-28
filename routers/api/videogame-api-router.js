const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/videogame-api-controller') 

router.get('/', controller.getAll);

router.get('/:id', controller.getOne);

router.post('/', controller.create);

router.delete('/:id', controller.delete);

module.exports = router; 