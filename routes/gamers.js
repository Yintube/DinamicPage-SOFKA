const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const data = Gamer.find({
    $or: [
      { 'deleted': { $eq: false } },
      { 'deleted': { $exists: false } },
    ]
  });
  data
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

module.exports = router;
