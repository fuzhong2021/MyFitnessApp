const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

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
