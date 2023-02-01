const express = require('express');
const app = express();
const connectDb = require('./src/connection');
const Workout = require('./src/Workout.model');
const cors = require('cors');

const PORT = 3000;
app.use(cors());

app.get('/workout', async (req, res) => {
  const workouts = await Workout.find();

  res.json(workouts);
});

app.get('/workout-create', async (req, res) => {
  const workout = new Workout({ workout: 'Test' });

  await workout.save().then(() => console.log('Workout created'));

  res.send('Workout created \n');
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  });
});
