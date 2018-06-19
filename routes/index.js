const express = require('express');
const router  = express.Router();
const Festival = require('../models/festival');

/* GET home page */
router.get('/', (req, res, next) => {
  Festival.find()
  .then((festivalDocs) => {
    let data = {
      festivals: festivalDocs
    };
    res.render('index', data);
  })
  .catch(err => {throw err})
});

module.exports = router;
