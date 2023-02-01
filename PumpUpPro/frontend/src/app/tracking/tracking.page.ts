import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSave() {
    const workout = {
      workout: 'bankdrücken',
      weights: 10,
      reps: 10
    };

    this.http.post('http://localhost:3000/workout-create', workout).subscribe(res => {
      console.log(res);
    });
  }
}



