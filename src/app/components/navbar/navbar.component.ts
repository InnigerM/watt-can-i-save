import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.title = segments[segments.length - 1].path;
    });
  }
}
