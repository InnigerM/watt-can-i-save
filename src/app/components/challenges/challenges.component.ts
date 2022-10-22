import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenges } from 'src/app/models/challenges.model';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  private category: string = '';
  challenges: Challenges[] = [];
  priceKwh: number = 0.30;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category') as string;
    this.http
      .get<Challenges[]>(`assets/challenges/${this.category}.json`)
      .subscribe((res) => {
        this.challenges = res;
      });
  }

  getSaving(potentialSaving: number): string {
    const result = potentialSaving * this.priceKwh;
    return result.toFixed(2);
  }
}
