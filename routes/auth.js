var express = require('express');
var router = express.Router();
var passport = require('passport');
var configAuth = require('../config/auth');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var soldadosModel = require('../model/strompperModel');
var config = require('../config/auth');


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.get('/facebook', passport.authenticate('facebook'));


router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {  
     res.redirect('http://localhost:3000/stromppers');
  });

passport.use(new FacebookStrategy({
    clientID: "1934126740191387",
    clientSecret: "233462cab40af020b418dead853698b9",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb, done) {
        console.log("profile idd" + profile.id + "  acesstok" + accessToken);
       return done(null, {});
  }
));

module.exports = router;