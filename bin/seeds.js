const mongoose = require("mongoose");
const Festival = require('../models/festival');
const Artist = require('../models/artist');

mongoose
  .connect('mongodb://localhost/ironhack-mob-exercise-express-festival', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
  const artist1 = new Artist ({
    name: "Beyonce",
    spotifyId: "1234",
  });
console.log(artist1);

const festival1 = new Festival ({
  name: "Berlin OpenAir",
  location:  "Berlin",
  startDate:  "09-06-2020",
  endDate:  "11-06-2020",
  genres: ["techno", "pop"],
  fees: [],
  _artists: [artist1._id]
});

festival1.save() // Create a new user and return a promise
  .then(user => { console.log('The festival was created') })
  .catch(err => { console.log('An error occured', err) });


artist1.save() // Create a new artist and return a promise
.then(user => { console.log('The artist was created') })
.catch(err => { console.log('An error occured', err) });
  