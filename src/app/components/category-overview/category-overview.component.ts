import { Component, OnInit } from '@angular/core';

interface Category {
  active: boolean,
  name: string,
  description: string,
  backgroundImage?: string,
  icon?: string
}

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {
  categories: Category[] = [
    {
      active: true,
      name: 'Haushalt',
      description: 'Backofen vorheizen? Alles Rund um Fehler, die du im Haushalt vermeiden solltest.'
    },
    {
      active: false,
      name: 'Warmwasser',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      active: false,
      name: 'Heizen',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
