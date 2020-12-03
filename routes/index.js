var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/open', function(req, res, next) {
  res.render('open', { title: 'Open' });
});

router.get('/close', function(req, res, next) {
  res.render('close', { title: 'Close' });
});

module.exports = router;
