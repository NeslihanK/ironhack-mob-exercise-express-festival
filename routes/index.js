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

router.get('/festival/new', (req, res, next) => {
  
    
    res.render('new-festival');
 
});

router.post('/festival/new', (req, res, next) => {
  console.log(req.body);
  
  let {name, url, location, startDate, endDate, genre, feeDescription, price}=req.body;
  let Fest = new Festival({
    name,
    url,
    location,
    startDate,
    endDate,
    genres: genre,
    fees: [{description: feeDescription ,
            price}]
  })
  Fest.save();

  
});

router.get('/:festival/delete', (req, res, next) => {
  let festivalId = req.params.festival;
  Festival.findByIdAndRemove(festivalId).then(()=>{
    res.redirect("/")
  }
)
  
});

module.exports = router;
