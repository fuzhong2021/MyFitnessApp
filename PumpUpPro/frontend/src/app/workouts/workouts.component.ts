import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})


export class WorkoutsComponent {
  private apiUrl = 'http://localhost:3000/workouts';
  workouts:any;
  selectedMuscleGroup = 'biceps';
  muscleGroups = ['biceps', 'triceps', 'lats', 'chest'];
  constructor(private http: HttpClient) {}
  getWorkouts() {
      return this.http.get(`${this.apiUrl}/${this.selectedMuscleGroup}`).subscribe(workouts => {
        this.workouts = Object.values(workouts);
      });
  }
  setWorkouts() {
    console.log("he");
}
}
