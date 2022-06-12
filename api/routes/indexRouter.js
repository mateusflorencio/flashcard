const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index)
router.get('/flashcards/:id', indexController.findId)
router.get('/flashcards', indexController.getAll)
router.post('/flashcards', indexController.save)
router.delete('/delete/:id', indexController.delete)


module.exports = router;