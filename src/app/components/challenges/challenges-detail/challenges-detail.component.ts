import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenges } from 'src/app/models/challenges.model';
import { ChallengesService } from 'src/app/services/challenges.service';
import { ElectricityPriceService } from 'src/app/services/electricity-price.service';

@Component({
  selector: 'app-challenges-detail',
  templateUrl: './challenges-detail.component.html',
  styleUrls: ['./challenges-detail.component.scss'],
})
export class ChallengesDetailComponent implements OnInit {
  challenge: Challenges;
  btnText: string = 'Challenge abschliessen';

  private id: number;
  private priceKwh: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengesService: ChallengesService,
    private electricityService: ElectricityPriceService
  ) {}

  ngOnInit(): void {
    this.priceKwh = this.electricityService.getPrice().value;

    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.challengesService.getChallengeById(this.id).subscribe((challenge) => {
      this.challenge = challenge;
      this.btnText = this.challenge.solved
        ? 'Challenge wiederrufen'
        : 'Challenge abschliessen';
    });
  }

  getSaving(potentialSaving: number): string {
    const result = (potentialSaving * this.priceKwh) / 100;
    return result.toFixed(2);
  }

  solveChallenge(): void {
    this.challengesService.setChallengeSolved(this.id, !this.challenge.solved);
    this.goBack();
  }

  goBack(): void {
    const category = this.route.snapshot.paramMap.get('category');
    this.router.navigate(['categories', category]);
  }
}
