import { Component, OnInit } from '@angular/core';
import { Statistics } from 'src/app/models/statistics';
import { ChallengesService } from 'src/app/services/challenges.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  statistics: Statistics;
  percentageSaved: number;

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.statistics = this.challengesService.getStatistics();
    this.percentageSaved =
      (this.statistics.savings / this.statistics.totalAmount) * 100;
  }
}
