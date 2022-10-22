import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Saving } from '../models/savings.model';

@Injectable({
  providedIn: 'root',
})
export class SavingsService {
  private allSavings: Saving[] = [];
  savings: BehaviorSubject<Saving[]> = new BehaviorSubject<Saving[]>([]);

  constructor() {}

  addSaving(saving: Saving): void {
    this.allSavings.push(saving);
    this.savings.next(this.allSavings);
  }

  getMinSavings(): number {
    if (this.allSavings.length > 0) {
      const minValue = this.allSavings
        .map((saving) => saving.minValue)
        .reduce((prevValue, curValue) => prevValue + curValue);
      return minValue;
    }
    return 0;
  }

  getMaxSavings(): number {
    if (this.allSavings.length > 0) {
      const maxValue = this.allSavings
        .map((saving) => saving.maxValue)
        .reduce((prevValue, curValue) => prevValue + curValue);
      return maxValue;
    }
    return 0;
  }
}
