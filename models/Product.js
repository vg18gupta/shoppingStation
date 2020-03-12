const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  info: {
    name: String,
    specialisation: String,
    experience: String,
    place:String,
    price: Number,
    photo: String
  },
  tags: {
    priceRange: String,
    brand: String,
    color: String,
    os: String,
    internalMemory: String,
    ram: String,
    displaySize: String,
    displayResolution: String,
    camera: String,
    cpu: String
  }
});

module.exports = mongoose.model('Product', productSchema);