var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (_req, res) {
  res.status(200).send("home")
});

module.exports = router;