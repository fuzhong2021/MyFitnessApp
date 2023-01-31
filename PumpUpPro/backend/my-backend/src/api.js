const axios = require('axios');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:8100' }));

// Verbinden Sie sich mit der MongoDB-Datenbank in Docker
mongoose.connect('mongodb://mongo/mongo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', error => console.error(error));


// Definieren Sie das Schema für den Verlauf
const HistorySchema = new mongoose.Schema({
  exercise: String
});

// Definieren Sie das Modell für den Verlauf
const History = mongoose.model('History', HistorySchema);

// API-Route zum Erstellen eines Eintrags im Verlauf
app.post('/createWorkout', (req, res) => {
  const history = new History({ exercise: req.body });
  console.log(history.name);
  history.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(history);
    }
  });
});




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


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
