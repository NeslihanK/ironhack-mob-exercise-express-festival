const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const festivalSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  genres: [String],
  fees: [{ description: String,
           price: Number }],
  _artists: [Schema.Types.ObjectId]
});

const Festival = mongoose.model("Festival", festivalSchema);
module.exports = Festival;