import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Workout {
  muscle: string;
  exercises: Exercise[];
}
type MuscleWorkout = { [muscle: string]: Exercise[] };
interface Exercise {
  name: string;
  // weitere Eigenschaften, die jedes Übungsobjekt besitzen soll
}

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})


export class WorkoutsComponent {
  private apiUrl = 'http://localhost:3000/workouts';
  constructor(private http: HttpClient) {}

  getWorkouts(muscleGroup: string) {
      return this.http.get(`${this.apiUrl}/${muscleGroup}`);
  }
}
