import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { ChallengesService } from '../../../../../services/challenges.service';

@Component({
  selector: 'app-water-questions',
  templateUrl: './water-questions.component.html',
  styleUrls: ['./water-questions.component.scss'],
})
export class WaterQuestionsComponent {
  durationNumber: number = 5;
  showerDuration = [...Array(20).keys()];

  showerTempLabel = 'lauwarm';
  showerTempNumber = 2;
  showerTemps = [
    { value: 0, label: 'heiss' },
    { value: 1, label: 'warm' },
    { value: 2, label: 'lauwarm' },
    { value: 3, label: 'kalt' },
  ];

  waterForm = new FormGroup({
    showerDuration: new FormControl(null, Validators.required),
    showerTemp: new FormControl(null, Validators.required),
    hasEcoShowerHead: new FormControl(null, Validators.required),
    coldWaterForHands: new FormControl(null, Validators.required),
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

  setTempLabel = (value: Event) =>
    (this.showerTempLabel =
      this.showerTemps.find(
        (e) => e.value === +(value.target as HTMLInputElement).value
      )?.label || '');
  setDuration = (value: Event) =>
    (this.durationNumber = +(value.target as HTMLInputElement).value);

  patchTemp = () => {
    this.waterForm.controls['showerTemp'].setValue(this.showerTempLabel);
    this.onFormChange('hasEcoShowerHead');
  };

  patchDuration = () => {
    this.waterForm.controls['showerDuration'].setValue(this.durationNumber);
    this.onFormChange('showerTemp');
  };

  onSubmit = () => {
    const values = this.waterForm.value;
    this.challengeService.setChallengeSolved(11, values.showerDuration < 5);
    this.challengeService.setChallengeSolved(
      10,
      !['kalt', 'lauwarm'].find((v) => values.showerTemp === v)
    );
    this.stateService.setQuestionsSolved('warmwasser');
    this.router.navigate(['categories/warmwasser']);
  };
}
