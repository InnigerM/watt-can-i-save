import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() name = ""; 
  @Input() description = "";
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
