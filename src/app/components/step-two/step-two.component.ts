import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  selectedValue = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.router.navigate(['light-switch']);
  }
}
