import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenges } from 'src/app/models/challenges.model';
import { Statistics } from 'src/app/models/statistics';
import { ChallengesService } from 'src/app/services/challenges.service';
import { ElectricityPriceService } from 'src/app/services/electricity-price.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges: Challenges[] = [];
  statistics: Statistics;
  priceKwh: number;

  private category: string = '';

  constructor(
    private route: ActivatedRoute,
    private challengesService: ChallengesService,
    private electricityService: ElectricityPriceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category') as string;
    this.statistics = this.challengesService.getStatistics(this.category);
    this.priceKwh = this.electricityService.getPrice().value;

    this.challengesService
      .getChallengesByCategory(this.category)
      .subscribe((challenges) => {
        this.challenges = challenges.sort(
          (challengeA, challengeB) =>
            Number(challengeA.solved) - Number(challengeB.solved)
        );
      });
  }

  getSaving(potentialSaving: number): string {
    const result = (potentialSaving * this.priceKwh) / 100;
    return result.toFixed(2);
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['categories', this.category, 'challenges', id]);
  }
}
