const express = require('express');
const mangaController = require('../controller/manga');

const router = express.Router();

router.get('/', mangaController.all);

router.get('/:id', mangaController.one);

router.post('/', mangaController.add);

router.put('/:id', mangaController.update);

module.exports = router;
