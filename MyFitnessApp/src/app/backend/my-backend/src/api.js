const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:8100' }));


async function getWorkouts() {
try {
const response = await axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
params: {muscle: 'biceps'},
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


getWorkouts().then(data => {
    console.log(data);
});

app.get('/workouts', (req, res) => {
  getWorkouts().then(data => {
    res.send(data);
  });
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = {
getWorkouts
}
