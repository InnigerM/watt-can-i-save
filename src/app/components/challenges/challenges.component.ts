import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenges } from 'src/app/models/challenges.model';
import { ChallengesService } from 'src/app/services/challenges.service';
import { ElectricityPriceService } from 'src/app/services/electricity-price.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges: Challenges[] = [];
  priceKwh: number;

  private category: string = '';

  constructor(
    private route: ActivatedRoute,
    private challengesService: ChallengesService,
    private electricityService: ElectricityPriceService
  ) {}

  ngOnInit(): void {
    this.priceKwh = this.electricityService.getPrice().value;

    this.category = this.route.snapshot.paramMap.get('category') as string;
    this.challengesService
      .getChallengesByCategory(this.category)
      .subscribe((challenges) => {
        this.challenges = challenges;
      });
  }

  getSaving(potentialSaving: number): string {
    const result = potentialSaving * this.priceKwh / 100;
    return result.toFixed(2);
  }

  solveChallenge(challenge: Challenges): void {
    this.challengesService.setChallengeSolved(challenge.id, !challenge.solved);
  }
}
