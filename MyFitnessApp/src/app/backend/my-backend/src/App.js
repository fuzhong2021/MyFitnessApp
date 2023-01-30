import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const muscleGroups = ['biceps', 'triceps', 'lats', 'chest'];



const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      for (let muscleGroup of muscleGroups) {
        const response = await getWorkouts(muscleGroup);
        data.push({ [muscleGroup]: response });
        if (data.length === muscleGroups.length) {
          setWorkouts(data);
        }
      }
    };

    fetchData();
  }, []);

  const getWorkouts = async muscle => {
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
  };

  return (
    <div>
      <h1>Workouts</h1>
      {workouts.map((workout, index) => (
        <div key={index}>
          {Object.entries(workout).map(([muscleGroup, exercises], index) => (
            <div key={index}>
              <h2>{muscleGroup}</h2>
              <ul>
                {exercises.map((exercise, index) => (
                  <li key={index}>{exercise.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
