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
  async createWorkout(): Promise<any> {
    const url = 'https://your-api-url.com/workout-create';
    const data = { workout:"h", weights:10, reps:10 };

    await this.http.post(url, data).toPromise();
    console.log("ya")
}
}
