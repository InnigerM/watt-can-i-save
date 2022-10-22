import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  level: number = 1;
  points: number = 1000;
  savings: number = 360;
  completedChallenges: number = 2;
  pointsForNextLevel: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
