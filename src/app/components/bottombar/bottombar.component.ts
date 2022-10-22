import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(page: string): void{
    this.router.navigate([page]);
  }

}
