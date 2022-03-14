const express = require('express');
const router = express.Router();

const Gamer = require('../model/gamer');

router.post('/', function(req, res, next) {

    const gamer = new Gamer({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email,
        genre: req.body.genre,
        friends: req.body.friends
    });

    gamer
      .save()
      .then(result => res.json(result))
      .catch(err => res.json(err));

});

module.exports = router;