const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/maincharacter-api-controller') 

//Get all ingredients 
router.get('/', controller.getAll);


//Get one ingredient
 router.get('/:id', controller.getOne);

//create ingredient
router.post('/', controller.create);

//Update ingredient
//Delete ingredient
router.
delete('/:id', controller.delete);

module.exports = router;