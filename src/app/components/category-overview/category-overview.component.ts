import { Component, OnInit } from '@angular/core';

interface Category {
  active: boolean,
  name: string,
  description: string,
  backgroundImage: string,
  icon: string
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
      description: 'Backofen vorheizen? Alles Rund um Fehler, die du im Haushalt vermeiden solltest.',
      icon: "cottage",
      backgroundImage: "/assets/img/household.jpg"
    },
    {
      active: false,
      name: 'Warmwasser',
      description: 'Warmduscher oder der Kälteschock zum wach werden?',
      icon: "water_drop",
      backgroundImage: "/assets/img/water.jpg"
    },
    {
      active: false,
      name: 'Heizen',
      description: 'Greifen wir zukünftig auch zu der Jacke im Haus?',
      icon: "local_fire_department",
      backgroundImage: "/assets/img/heater.jpg"
    },
    {
      active: false,
      name: 'Elektronik',
      description: 'Zuhause lauern viele kleine Stromfresser, finde sie jetzt!',
      icon: "electrical_services",
      backgroundImage: "/assets/img/electronics.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
