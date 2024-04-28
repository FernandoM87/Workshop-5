const express = require('express');
const router = express.Router();
const controller = require ('../../controllers/web/maincharacter-web-controller');

router.get('/', controller.showAll);

router.get('/new', controller.showCreateForm);

router.get('/:id', controller.showOne);

router.post('/new', controller.create);

router.get('/:id/edit', controller.showEditForm);

router.post('/:id/edit', controller.update);

router.post('/:id/delete', controller.delete);

module.exports = router; 