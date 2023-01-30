const axios = require('axios');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const WorkoutSchema = new mongoose.Schema({
  exercise: String,
  weight: Number,
  reps: Number
});

const Workouts = mongoose.model('Workouts', WorkoutSchema);

app.use(cors({ origin: 'http://localhost:8100' }));
app.use(express.json());

mongoose.connect('mongodb://mongo/mongo', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', error => console.error(error));

app.get('/workouts', (req, res) => {
  const muscleGroups = ['biceps', 'triceps', 'lats', 'chest'];
  Promise.all(muscleGroups.map(getWorkouts))
    .then(workoutsData => res.send(workoutsData.reduce((result, workout, index) => {
      result[muscleGroups[index]] = workout;
      return result;
    }, {})))
    .catch(error => res.status(500).send(error));
});

app.post('/api/createWorkout', (req, res) => {
  const workout = {
    exercise: req.body.exercise,
    weight: req.body.weight,
    reps: req.body.reps
  };

  Workouts.create(workout)
    .then(createdWorkout => res.send(createdWorkout))
    .catch(error => res.status(500).send(error));
});

async function getWorkouts(muscle) {
  try {
    const response = await axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
      params: { muscle },
      headers: {
        'X-RapidAPI-Key': '0eb09f5654msh5402e43e317a74ap1a77bejsn3c7a2790056c',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

app.listen(3000, () => console.log('Server started on port 3000'));
