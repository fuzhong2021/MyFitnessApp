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
      exercise: 'bankdrücken',
      weight: 10,
      repetitions: 10
    };

    this.http.post('http://localhost:3000/api/createWorkout', workout).subscribe(res => {
      console.log(res);
    });
  }
}



