import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-devices-questions',
  templateUrl: './devices-questions.component.html',
  styleUrls: ['./devices-questions.component.scss']
})
export class DevicesQuestionsComponent implements OnInit {

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stateService.setQuestionsSolved('elektronik');
    this.router.navigate(['categories/elektronik'])
  }
}
