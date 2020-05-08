var passport = require('../config/passport');

var express = require('express');
var router = express.Router();

var Category = require("../models/category");

// List categories
router.get('/', function(req, res, next) {
    console.log("List categories");
      Category.findAll()
        .then(categories => { res.status(200).json(categories) })
        .catch(err => { res.status(500).json(err) });
});

// Get category by id
router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    Category.findByPk(req.params.id)
        .then(category => { res.status(200).json(category) })
        .catch(err => { res.status(500).json(err) });
});

// Create category
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    console.log(req.body);
    Category.create(req.body)
        .then(category => { res.status(201).json(category) })
        .catch(err => { res.status(500).json(err) });
});

// Update category
router.put('/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
    console.log(req.body);
    Category.update(req.body, { where: { id: req.params.id }})
        .then(category => { res.status(201).json(category) })
        .catch(err => { res.status(500).json(err) });
});

// Delete category
router.delete('/:id', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    Category.destroy({ where: { id: req.params.id }})
        .then( res.status(200) )
        .catch(err => { res.status(500).json(err) });
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