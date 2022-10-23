import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss'],
})
export class LightSwitchComponent implements OnInit {
  isDarkThemeEnabled: boolean = false;

  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  switchTheme() {
    const html = document.querySelector('html') as HTMLElement;
    const glow = document.querySelector('.glow') as HTMLElement;

    if (this.isDarkThemeEnabled) {
      html.dataset['theme'] = 'light';
      glow.style.opacity = '1';
    } else {
      html.dataset['theme'] = 'night';
      glow.style.opacity = '0';
    }

    this.isDarkThemeEnabled = !this.isDarkThemeEnabled;
  }

  routeToCategories() {
    this.stateService.setInitalSetupCompleted(true);
    this.router.navigate(['/categories']);
  }
}
