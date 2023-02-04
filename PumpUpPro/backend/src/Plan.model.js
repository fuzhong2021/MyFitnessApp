const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String
  },
  equipment: {
    type: String
  },
  difficulty: {
    type: String
  },
  instructions: {
    type: String
  }

});

const Plan = mongoose.model("plan", planSchema);

module.exports = Plan;
