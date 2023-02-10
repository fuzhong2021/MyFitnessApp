import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  workouts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://10.0.2.2:3000/getplan').subscribe((workouts) => {
        this.workouts = workouts;
        console.log(workouts);
      });
  }

}
