import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Challenges } from '../models/challenges.model';
import { CHALLENGES_KEY } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private FILE_PATH: string = '/assets/challenges.json';
  public challenges: BehaviorSubject<Challenges[]>;

  constructor(private httpClient: HttpClient) {
    // Load empty challenges from assets if localstorage is empty
    if(localStorage.getItem(CHALLENGES_KEY) === null) {
      this.httpClient.get<Challenges[]>(this.FILE_PATH)
        .subscribe(challenges => {
          this.challenges.next(challenges) ;
          this.saveToLocalStorage();
        });
    } else {
      this.challenges.next(JSON.parse(localStorage.getItem(CHALLENGES_KEY)));
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem(CHALLENGES_KEY, JSON.stringify(this.challenges.value));
  }
}
