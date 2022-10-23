import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChallengesService} from "../../../../../services/challenges.service";

@Component({
  selector: 'app-devices-questions',
  templateUrl: './devices-questions.component.html',
  styleUrls: ['./devices-questions.component.scss']
})
export class DevicesQuestionsComponent {

  constructor(private router: Router, private stateService: StateService, private challengeService: ChallengesService) { }

  devicesForm = new FormGroup({
    standByMode: new FormControl(null, Validators.required),
    hairDryer: new FormControl(null, Validators.required),
  });

  onFormChange = (formControlName: string) => {
    document.getElementById(formControlName)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  onSubmit() {
    const values = this.devicesForm.value;
    this.challengeService.setChallengeSolved(14, !values.standByMode);
    this.challengeService.setChallengeSolved(6, !values.hairDryer);

    this.stateService.setQuestionsSolved('elektronik');
    this.router.navigate(['categories/elektronik'])
  }
}
