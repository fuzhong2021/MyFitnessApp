const express = require('express');
const axios = require('axios');
const app = express();
const connectDb = require('./src/connection');
const Workout = require('./src/Workout.model');
const Plan = require('./src/Plan.model');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 3000;
app.use(cors());


app.get('/api/workouts', (req, res) => {
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
app.get('/api/workouts/:muscleGroup', async (req, res) => {
  const muscleGroup = req.params.muscleGroup;
  const workouts = await getWorkouts(muscleGroup);
  res.send({ [muscleGroup]: workouts });
});

app.post('/db/workout-create', (req, res) => {
  console.log(req.body);
  const workout = new Workout({ workout: req.body.name, weight: req.body.weights, reps: req.body.reps });

  workout.save().then(() => console.log(req.body.name));

  res.send({message: req.body.name});
});

app.post('/addWorkout', async (req, res) => {
  const plan = new Plan({
    name: req.body.name,
    equipment: req.body.equipment,
    difficulty: req.body.difficulty,
    instructions: req.body.instructions
  });
  plan.save((err) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ message: 'Workout successfully added to the database.' });
    }
  });
});
app.get('/getplan', async (req, res) => {
  Plan.find({}, (error, plans) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    return res.send(plans);
  });
});
app.get('/gethistory', async (req, res) => {
  Workout.find({}, (error, plans) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    return res.send(plans);
  });
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
