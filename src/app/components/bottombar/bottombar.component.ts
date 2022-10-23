import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  visible = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          val.url === '/rooms' ||
          val.url === '/' ||
          /categories\/\w{4,10}\/challenges\/\d{1,3}/.test(val.url)
        ) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
    });
  }

  ngOnInit(): void {}

  submit(page: string): void {
    this.router.navigate([page]);
  }
}
