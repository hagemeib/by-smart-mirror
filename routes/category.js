var passport = require('../config/passport');

var express = require('express');
var router = express.Router();

var Category = require("../models/category");

// List categories
router.get('/', function(req, res, next) {
    console.log("List categories");
      Category.find(function (err, categories) {
        if (err) {
            return next(err);
        } 
        res.json(categories);
      });
});

// Get category by id
router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
    Category.findById(req.params.id, function (err, category) {
      if (err) {
          return next(err);
      }
      res.json(category);
    });
});

// Create category
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    console.log(req.body);
    Category.create(req.body, function(err, Category) {
        if (err) {
            return res.json({success: false, msg: 'Save category failed.', error: err});
        }
        res.json({success: true, msg: 'Successful created new category.'});
    });
});

// Update category
router.put('/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
    console.log(req.body);
    Category.findByIdAndUpdate(req.params.id, req.body, function(err, category) {
        if (err) {
            return res.json({success: false, msg: 'Update category failed.'});
        }
        res.json({success: true, msg: 'Successful updated category.'});
    });
});

// Delete category
router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
        if (err) {
            return next(err);
        }
        res.json({success: true, msg: 'Successful deleted category.'});
    });
});
  
checkToken = function (req, res, next) {
    var headers = req.headers;
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2 && parted[1]) {
            next();
        }
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

module.exports = router;