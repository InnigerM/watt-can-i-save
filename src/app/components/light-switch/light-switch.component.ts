import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss'],
})
export class LightSwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const bulbOn: String = 'bulb_on.png';
    const bulbOff: String = 'bulb_off.png';

    function changeBulb() {}
  }
}
