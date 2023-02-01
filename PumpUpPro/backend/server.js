const express = require('express');
const axios = require('axios');
const app = express();
const connectDb = require('./src/connection');
const Workout = require('./src/Workout.model');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3000;
app.use(cors({ origin: 'http://localhost:8100' }));


app.get('/workouts', (req, res) => {
  const muscleGroups = ['biceps', 'triceps', 'lats', 'chest'];
  let workouts = [];
  muscleGroups.forEach(async muscleGroup => {
    const response = await getWorkouts(muscleGroup);
    workouts.push({ [muscleGroup]: response });
    if (workouts.length === muscleGroups.length) {
      res.send(workouts);
    }
  });
});
app.get('/workouts/:muscleGroup', async (req, res) => {
  const muscleGroup = req.params.muscleGroup;
  const workouts = await getWorkouts(muscleGroup);
  res.send({ [muscleGroup]: workouts });
});

app.post('/workout-create', async (req, res) => {
  console.log(req + res);
  const workout = new Workout({ workout: req.body.workout, weights: req.body.weights, reps: req.body.reps });

  await workout.save().then(() => console.log('Workout created'));

  res.send({message: 'Workout created \n'});
});


async function getWorkouts(muscle) {
  try {
    const response = await axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
      params: { muscle: muscle },
      headers: {
        'X-RapidAPI-Key': '0eb09f5654msh5402e43e317a74ap1a77bejsn3c7a2790056c',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}


app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  });
});
