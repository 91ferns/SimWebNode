var express = require('express');
var router = express.Router();

var passport = require('passport');


/* GET home page. */
router.get('/bnet', passport.authenticate('bnet'));
router.get('/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
    });


module.exports = router;
