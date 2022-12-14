import { StateService } from 'src/app/services/state.service';
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ChallengesService} from "../../../../../services/challenges.service";

@Component({
  selector: 'app-heating-questions',
  templateUrl: './heating-questions.component.html',
  styleUrls: ['./heating-questions.component.scss']
})
export class HeatingQuestionsComponent {

  roomTempNumber: number = 22;
  roomTemps = Array.from({length: 15}, (_, i) => i + 15)

  heatingForm = new FormGroup({
      roomTemp: new FormControl(null, Validators.required),
      airing: new FormControl(null, Validators.required)
    }
  )

  constructor(private router: Router, private challengeService: ChallengesService, private stateService: StateService) {}

  onFormChange = (formControlName: string) => {
    document.getElementById(formControlName)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }

  setTempLabel = (value: Event) => this.roomTempNumber = +(value.target as HTMLInputElement).value;

  patchTemp = () => {
    this.heatingForm.controls['roomTemp'].setValue(this.roomTempNumber);
    this.onFormChange('airing');
  }

  onSubmit = () => {
    const values = this.heatingForm.value;
    this.challengeService.setChallengeSolved(7, values.roomTemp <= 20);
    this.challengeService.setChallengeSolved(13, values.airing);
    this.stateService.setQuestionsSolved('heizen');
    this.router.navigate(['categories/heizen'])
  };

}
