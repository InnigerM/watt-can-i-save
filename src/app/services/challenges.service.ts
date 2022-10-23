import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Challenges } from '../models/challenges.model';
import { Statistics } from '../models/statistics';
import { CHALLENGES_KEY } from '../utils';
import { ElectricityPriceService } from './electricity-price.service';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private FILE_PATH: string = '/assets/challenges.json';
  public challenges: BehaviorSubject<Challenges[]> = new BehaviorSubject<
    Challenges[]
  >([]);

  constructor(private httpClient: HttpClient, private electricityPriceService: ElectricityPriceService) {
    // Load empty challenges from assets if localstorage is empty
    if (localStorage.getItem(CHALLENGES_KEY) === null) {
      this.httpClient
        .get<Challenges[]>(this.FILE_PATH)
        .subscribe((challenges) => {
          this.challenges.next(challenges);
          this.saveToLocalStorage();
        });
    } else {
      this.challenges.next(JSON.parse(localStorage.getItem(CHALLENGES_KEY)!));
    }
  }

  getChallengesByCategory(category: string): Observable<Challenges[]> {
    return this.challenges.pipe(
      map((challenges) =>
        challenges.filter((challenge) => challenge.category === category)
      )
    );
  }

  setChallengeSolved(id: number, status: boolean): void {
    this.challenges.value
      .filter((challenge) => challenge.id === id)
      .map((challenge) => (challenge.solved = status));
    this.saveToLocalStorage();
  }

  getStatistics(category: string = null): Statistics {
    const price = this.electricityPriceService.getPrice().value;

    const statistics: Statistics = {
      challengesSolved: 0,
      potentialSavings: 0,
      savings: 0,
      totalAmount: 0
    }

    const challenges = category !== null ? this.challenges.value.filter(challenge => challenge.category === category) : this.challenges.value

   challenges.forEach(challenge => {
      if (challenge.solved) {
        statistics.challengesSolved += 1;
        statistics.savings += (challenge.potentialKwhSaved * price) / 100
      } else {
        statistics.potentialSavings += (challenge.potentialKwhSaved * price) / 100;
      }
    });

    statistics.totalAmount = statistics.potentialSavings + statistics.savings;
    return statistics;
  }


  private saveToLocalStorage() {
    localStorage.setItem(CHALLENGES_KEY, JSON.stringify(this.challenges.value));
  }
}
