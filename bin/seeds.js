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
const artist2 = new Artist ({
  name: "Conchita Wurst",
  spotifyId: "1TGdxJ3UvFq055SVjwx49v",
});
console.log(artist1);

const festival1 = new Festival ({
  name: "Berlin OpenAir",
  location:  "Berlin",
  startDate: new Date( "09-06-2020"),
  endDate:  new Date("11-06-2020"),
  genres: ["techno", "pop"],
  fees: [],
  _artists: [artist1._id]
});
const festival2 = new Festival ({
  name: "Donauinselfest",
  location:  "Wien",
  startDate: new Date("2018-06-20"),
  endDate:  new Date("2018-06-24"),
  genres: ["techno", "pop"],
  fees: [],
  _artists: [artist1._id, artist2._id]
});

Festival.deleteMany()
.then(_ => Artist.deleteMany())
.then(_ => {
  festival1.save()
    .then(user => { console.log('The festival was created') })
    .catch(err => { console.log('An error occured', err) });
  festival2.save()
    .then(user => { console.log('The festival was created') })
    .catch(err => { console.log('An error occured', err) });
  
  artist1.save() // Create a new artist and return a promise
    .then(user => { console.log('The artist was created') })
    .catch(err => { console.log('An error occured', err) });
  artist2.save() // Create a new artist and return a promise
  .then(user => { console.log('The artist was created') })
  .catch(err => { console.log('An error occured', err) });
})
  