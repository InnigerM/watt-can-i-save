import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Challenges } from '../models/challenges.model';
import { State } from '../models/state.model';
import { Statistics } from '../models/statistics';
import { CHALLENGES_KEY, STATE_KEY } from '../utils';
import { ElectricityPriceService } from './electricity-price.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private FILE_PATH: string = '/assets/state.json';
  public state: State;

  constructor() {
    // Load empty challenges from assets if localstorage is empty
    if (localStorage.getItem(STATE_KEY) === null) {
      this.state = {
        "initalSetupCompleted": false,
        "questionAnswered": {
          "haushalt": false,
          "warmwasser": false,
          "heizen": false,
          "elektronik": false
        }
      };
      this.saveToLocalStorage();
    } else {
      this.state = JSON.parse(localStorage.getItem(STATE_KEY));
      this.state.initalSetupCompleted = true;
      this.state.questionAnswered["haushalt"]=true;
    }
  }

  setInitalSetupCompleted(completed: boolean) {
    this.state.initalSetupCompleted = completed;
    this.saveToLocalStorage();
  }

  isInitalSetupComplete(): boolean {
    return this.state.initalSetupCompleted;
  }

  setQuestionsSolved(category: 'haushalt' | 'warmwasser' | 'heizen' | 'elektronik') {
    this.state.questionAnswered[category] = true;
    this.saveToLocalStorage();
  }

  isQuestionSolved(category: 'haushalt' | 'warmwasser' | 'heizen' | 'elektronik'): boolean {
    return this.state.questionAnswered[category];
  }

  resetState() {
    this.state = {
      "initalSetupCompleted": false,
      "questionAnswered": {
        "haushalt": false,
        "warmwasser": false,
        "heizen": false,
        "elektronik": false
      }
    };
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(STATE_KEY, JSON.stringify(this.state));
  }
}
