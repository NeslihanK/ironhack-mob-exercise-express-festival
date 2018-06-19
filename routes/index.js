const express = require('express');
const router  = express.Router();
const Festival = require('../models/festival');
const Artist = require('../models/artist');

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

router.get('/:festivalId', (req, res, next) => {
  let festivalId = req.params.festivalId
  Festival.findById(festivalId)
  .populate('_artists')
  .then((festival) => {
     
    console.log(festival.artists);
    res.render('festival', festival);
  })
  .catch(err => {throw err})
});

router.get('/artist/:artistId', (req, res, next) => {
  let artistId = req.params.artistId
  Artist.findById(artistId)

  .then((artist) => {
    
    res.render('artist', artist);
  })
  .catch(err => {throw err})
});

module.exports = router;
