const mongoose = require("mongoose");
const Artist = require('../models/artist')
const Schema   = mongoose.Schema;

const festivalSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String},
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  genres: [String],
  fees: [{ description: String,
           price: Number }],
  _artists: [{type: Schema.Types.ObjectId, ref:'Artist'}]
});

const Festival = mongoose.model("Festival", festivalSchema);
module.exports = Festival;