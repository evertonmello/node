var express = require('express');
var router = express.Router();
var passport = require('passport');
var configAuth = require('../config/auth');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../model/userModel');
var config = require('../config/auth');


//facebook authentication config...
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: "1934126740191387",
    clientSecret: "233462cab40af020b418dead853698b9",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb, done) {
    user = new User({id: profile.id,token: refreshToken, email: "adssdasda",name: "String" });
     user.save(function(err) {
        if(err)return err;        
        return done(null, {});
      });
  }
));
//

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/listaTelefonica' }),
  function(req, res) {  
     res.redirect('http://localhost:3000/stromppers');
});

module.exports = router;