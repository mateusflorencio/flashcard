const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index)
router.get('/flashcards', indexController.getAll)
router.post('/flashcards', indexController.save)


module.exports = router;