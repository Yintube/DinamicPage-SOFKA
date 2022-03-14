const express = require('express');
const router = express.Router();

const Gamer = require('../model/gamer');

router.delete('/:id', function(req, res, next) {

    //borrado físico
    //Gamer.findByIdAndDelete(req.params.id)
    //.then(result => res.json (result))
    //.catch(err => res.json(err));

    //borrado lógico con plugin
    Gamer.deleteById(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

module.exports = router;