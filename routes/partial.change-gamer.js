const express = require('express');
const router = express.Router();

const Gamer = require('../model/gamer');

/*Cambios parciales a un usuario*/
router.patch('/name/:id', function (req, res, next){

    Gamer.findByIdAndUpdate(req.params.id, { name: req.body.name })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });

});

router.patch('/lastname/:id', function (req, res, next){

    Gamer.findByIdAndUpdate(req.params.id, { lastname: req.body.lastname })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });
      
});

router.patch('/age/:id', function (req, res, next){

    Gamer.findByIdAndUpdate(req.params.id, { age: req.body.age })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });
      
});

router.patch('/email/:id', function (req, res, next){

    Gamer.findByIdAndUpdate(req.params.id, { email: req.body.email })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });
      
});

router.patch('/genre/:id', function (req, res, next){

    Gamer.findByIdAndUpdate(req.params.id, { genre: req.body.genre })
      .then((result) => { res.json(result) })
      .catch((err) => { res.json(err) });
      
});
    
module.exports = router;