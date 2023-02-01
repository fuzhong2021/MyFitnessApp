const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workout: {
    type: String
  },
  weights: {
    type: Number
  },
  reps: {
    type: Number
  }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
