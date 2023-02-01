const mongoose = require("mongoose");

const Workout = require("./Workout.model");

const connection = "mongodb://mongo:27017/workout-history";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
