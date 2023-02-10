import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  plan: any;
  selectedExercise: any;
  weightValue: number;
  repsValue: number;



  constructor(private http: HttpClient) {}

ngOnInit() {
    this.http.get('http://localhost:3000/getplan').subscribe((plan) => {
      this.plan = plan;
    for(let p of this.plan) {
        this.http.get(`http://localhost:3000/gethighscore/${p.name}`).subscribe((highscore) => {
            p.highscore = highscore;
            p.max = p.highscore[0].weights;
            console.log(p.max);
        });
}
      console.log(plan);
    });


    this.weightValue = 50;
    this.repsValue = 10;
}

  onSave(plan: any[]) {
  for (let p of plan) {
    if (p.selectedExercise) {
    this.http.post('http://localhost:3000/db/workout-create', {name: p.selectedExercise, weights: p.weightValue, reps: p.repsValue}).subscribe(res => {
      console.log(res);
    });
  }
}
}
  incrementValue() {
    this.weightValue += 2.5;
  }
  decrementValue() {
    this.weightValue -= 2.5;
  }
}

