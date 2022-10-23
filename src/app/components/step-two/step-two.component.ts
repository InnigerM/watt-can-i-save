import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  submit() {
    this.stateService.setInitalSetupCompleted(true);
    this.router.navigate(['categories']);
  }
}
