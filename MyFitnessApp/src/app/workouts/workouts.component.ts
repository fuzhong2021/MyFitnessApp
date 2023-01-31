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


export class WorkoutsComponent implements OnInit {
    workouts: any;  // adding the field to store workouts
    filteredWorkouts: any;
    constructor(private http: HttpClient) {

          }
    ngOnInit() {
      this.http.get<Workout[]>('http://localhost:3000/workouts').subscribe(
        (data: Workout[]) => {
          this.workouts = data;
          this.filteredWorkouts = this.workouts
            .filter((workout: MuscleWorkout) => Object.keys(workout)[0] === 'chest')
            .reduce((acc: Exercise[], val: MuscleWorkout) => acc.concat(val[Object.keys(val)[0]]), []);

          /* with this code you can test variable
          if (this.filteredWorkouts.length === 0) {
            console.log("Array is empty");
          } else {
            console.log("Array is not empty");
          }
          */
        },
        (error) => {
          console.error(error);
        }
      );
    }
}
