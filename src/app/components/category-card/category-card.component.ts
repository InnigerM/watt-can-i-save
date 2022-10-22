import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() name = ""; 
  @Input() description = "";
  @Input() active = false;
  @Input() icon = "";
  @Input() imageSrc = "";

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['categories', this.name, 'questions'])
    console.log("called submit")
  }

}
