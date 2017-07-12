var express = require('express');
var router = express.Router();
var passport = require('passport');
var configAuth = require('../config/auth');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var soldadosModel = require('../model/strompperModel');

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/sucesso',
                                      failureRedirect: '/error' }));

passport.use(new FacebookStrategy({
    clientID: '1934126740191387',
    clientSecret: '233462cab40af020b418dead853698b9',
    callbackURL: "http://localhost:3000/stromppers"
  },
  function(accessToken, refreshToken, profile, done) {
    soldadosModel.find(function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));


module.exports = router;