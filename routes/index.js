var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.user) {
    res.render('index', { title: 'Express', user: req.user.battletag || '' });
  } else {
    res.render('index', { title: 'Express', user: false });
  }

});

module.exports = router;
