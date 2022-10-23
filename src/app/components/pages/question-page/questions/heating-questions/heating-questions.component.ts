import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-heating-questions',
  templateUrl: './heating-questions.component.html',
  styleUrls: ['./heating-questions.component.scss']
})
export class HeatingQuestionsComponent implements OnInit {

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stateService.setQuestionsSolved('heizen');
    this.router.navigate(['categories/heizen'])
  }

}
