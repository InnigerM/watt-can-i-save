import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bh-watt-can-i-save';

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    const html = document.querySelector('html') as HTMLElement;

    if (this.stateService.isInitalSetupComplete()) {
      html.dataset['theme'] = 'night';
    } else {
      html.dataset['theme'] = 'light';
    }
  }
}
