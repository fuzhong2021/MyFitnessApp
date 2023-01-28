import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
    workouts: any;  // adding the field to store workouts
    constructor(private http: HttpClient) {}
    ngOnInit() {
        this.http.get('http://localhost:3000/workouts').subscribe(
          (data: any) => {
            this.workouts = data;
          },
          (error) => {
            console.error(error);
          }
        );
    }
}
