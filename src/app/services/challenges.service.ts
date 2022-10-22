import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Challenges } from '../models/challenges.model';
import { CHALLENGES_KEY } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private FILE_PATH: string = '/assets/challenges.json';
  private challenges: Challenges[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Challenges[]>(this.FILE_PATH)
    .subscribe(challenges=> {
      this.challenges = challenges;
      this.saveToLocalStorage();
    })
  }

  private saveToLocalStorage() {
    localStorage.setItem(CHALLENGES_KEY, JSON.stringify(this.challenges));
  }
}
