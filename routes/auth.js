var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../model/userModel');


router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/listaTelefonica' }),
  function(req, res) {  
     res.redirect('http://localhost:3000/users');
});

module.exports = router;