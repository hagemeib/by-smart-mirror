var passport = require('../config/passport');
var config = require('../config/database');

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require("../models/user");

// List users
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  User.find(function (err, users) {
    if (err) {
        return next(err);
    } 
    res.json(users);
  });
});

router.post('/signup', function(req, res) {
    if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) {
        return res.json({success: false, msg: 'Firstname, lastname, email and password are required'});
    } else {
        User.create(req.body, function(err) {
            if (err) {
              return res.json({success: false, msg: 'User with given email already exists.', error: err});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});

router.post('/signin', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: 1800 // 1/2 hour = 1800s TODO: not checked yet
          });
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed.'});
        }
      });
    }
  });
});

router.get('/signout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({success: true, msg: 'Sign out successfully.'});
});

module.exports = router;
