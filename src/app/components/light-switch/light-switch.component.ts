import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss'],
})
export class LightSwitchComponent implements OnInit {
  isDarkThemeEnabled: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  switchTheme() {
    const html = document.querySelector('html') as HTMLElement;

    if (this.isDarkThemeEnabled) {
      html.dataset['theme'] = 'light';
    } else {
      html.dataset['theme'] = 'night';
    }

    this.isDarkThemeEnabled = !this.isDarkThemeEnabled;
  }

  routeToCategories() {
    this.router.navigate(['/categories']);
  }
}
