import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  workouts: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://10.0.2.2:3000/gethistory').subscribe((workouts) => {
        this.workouts = workouts;
        console.log(workouts);
      });
  }

}
