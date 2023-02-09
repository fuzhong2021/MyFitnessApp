import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  weightValue=100;
  repsValue=0;
  plan: any; 


  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http.get('http://localhost:3000/getplan').subscribe((plan) => {
        this.plan = plan;
        console.log(plan);
      });
  }

  onSave() {
    const workout = {
      workout: 'bankdrücken',
      weights: this.weightValue,
      reps: 10
    };

    this.http.post('http://localhost:3000/workout-create', workout).subscribe(res => {
      console.log(res);
    });
  }


  incrementValue() {
    this.weightValue += 5;
  }

  decrementValue() {
    this.weightValue -= 5;
  }
}
