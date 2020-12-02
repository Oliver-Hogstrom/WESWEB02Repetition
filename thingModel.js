const mongoose = require ('mongoose')
const thingSchema = new mongoose.Schema({
    kanelbulle: String
  });

  const Thing = mongoose.model('Thing', thingSchema);

  exports.saveThing = (kanelbulle) => {
    let keso = new Thing({
        kanelbulle: kanelbulle
    })
  
    keso.save();
  }
