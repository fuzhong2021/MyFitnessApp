import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})


export class WorkoutsComponent {
  private apiUrl = 'http://localhost:3000/api/workouts';
  // private apiUrl = 'http://10.0.2.2:3000/api/workouts';
  workouts: any;
  selectedMuscleGroup = 'biceps';
  muscleGroups = ['biceps', 'triceps', 'lats', 'chest'];
  constructor(private http: HttpClient) {}
  getWorkouts() {
    return this.http.get(`${this.apiUrl}/${this.selectedMuscleGroup}`).subscribe(workouts => {
      this.workouts = Object.values(workouts);
    });
}
addWorkout(workout: {name: string, difficulty: string, equipment: string, instructions: string}) {
const plan_list = {
        name: workout.name,
        difficulty: workout.difficulty,
        equipment: workout.equipment,
        instructions: workout.instructions
      };
    this.http.post('http://localhost:3000/addWorkout', plan_list).subscribe(() => {
      console.log(`Workout mit dem Namen "${plan_list}" wurde erfolgreich hinzugefügt.`);
    });
  }
}
