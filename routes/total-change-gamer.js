const express = require('express');
const router = express.Router();

const Gamer = require('../model/gamer');

router.put('/:id', function(req, res, next) {

    Gamer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email,
        genre: req.body.genre,
        friends: req.body.friends
    })

        .then((result => { res.json(result) }))
        .catch((err) => { res.json(err) });
});

module.exports = router;