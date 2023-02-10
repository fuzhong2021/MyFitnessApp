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
  ngOnInit() {
  this.getWorkouts();
  }
  getWorkouts() {
    return this.http.get(`${this.apiUrl}/${this.selectedMuscleGroup}`).subscribe(workouts => {
      this.workouts = Object.values(workouts);
    });
}
addWorkout(workoutName: String, workoutEquipment: String, workoutDifficulty: String, workoutInstruction: String) {
  const plan_list = {
          name: workoutName,
          difficulty: workoutDifficulty,
          equipment: workoutEquipment,
          instructions: workoutInstruction
        };
      this.http.post('http://10.0.2.2:3000/addWorkout', plan_list).subscribe(() => {
        console.log(`Workout mit dem Namen "${plan_list}" wurde erfolgreich hinzugefügt.`);
      });
    }
}
