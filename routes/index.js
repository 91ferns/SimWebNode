var express = require('express');
var simc = require('../engine/build/Release/simc');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.user) {
    res.render('index', { title: 'Express', user: req.user.battletag || '' });
  } else {
    res.render('index', { title: 'Express', user: false });
  }

});

router.get('/sim', function(req, res) {
  console.log('hey');
  res.render('sim', {});

});

router.get('/sim/do', function(req,res) {
  simc.run({
    "armory": req.query.region + "," + req.query.realm + "," + req.query.name
  }, function (data) {
    res.end(JSON.stringify(data));
  });
  console.log('hey');
});

module.exports = router;
