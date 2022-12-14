import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChallengesService } from 'src/app/services/challenges.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-household-questions',
  templateUrl: './household-questions.component.html',
  styleUrls: ['./household-questions.component.scss'],
})
export class HouseholdQuestionsComponent {
  efficiencyNumber: number = 3;
  efficiencyLabel: string = 'A';

  efficiencyClasses = [
    { value: 0, label: 'A+++' },
    { value: 1, label: 'A++' },
    { value: 2, label: 'A+' },
    { value: 3, label: 'A' },
    { value: 4, label: 'B' },
    { value: 5, label: 'C' },
    { value: 6, label: 'D' },
  ];

  householdForm = new FormGroup({
    isPreheating: new FormControl(null, Validators.required),
    isCirculatingAirUsed: new FormControl(null, Validators.required),
    heatUntilEnd: new FormControl(null, Validators.required),
    efficiencyClass: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private challengeService: ChallengesService,
    private stateService: StateService
  ) {}

  onFormChange = (formControlName: string) => {
    document.getElementById(formControlName)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  setEfficiencyLabel = (value: Event) =>
    (this.efficiencyLabel =
      this.efficiencyClasses.find(
        (e) => e.value === +(value.target as HTMLInputElement).value
      )?.label || '');

  patchEfficiencyClass = () => {
    this.householdForm.controls['efficiencyClass'].setValue(
      this.efficiencyLabel
    );
    this.onFormChange('submit-button');
  };

  onSubmit = () => {
    const values = this.householdForm.value;
    this.challengeService.setChallengeSolved(1, !values.isPreheating);
    this.challengeService.setChallengeSolved(2, values.isCirculatingAirUsed);
    this.challengeService.setChallengeSolved(3, !values.heatUntilEnd);
    this.challengeService.setChallengeSolved(4, values.efficiencyClass === 'A+++');
    this.stateService.setQuestionsSolved('haushalt');
    this.router.navigate(['categories/haushalt']);
  };
}
