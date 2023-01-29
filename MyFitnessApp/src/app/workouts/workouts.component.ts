import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Workout {
  name: string;
  muscle: string;
}

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})


export class WorkoutsComponent implements OnInit {
    workouts: any;  // adding the field to store workouts
    filteredWorkouts: any;
    constructor(private http: HttpClient) {

          }
    ngOnInit() {
        this.http.get('http://localhost:3000/workouts').subscribe(
          (data: any) => {
            this.workouts = data;
            this.filteredWorkouts = this.workouts.filter((workout: Workout) => workout.muscle === 'biceps');
          },
          (error) => {
            console.error(error);
          }
        );
    }
}
