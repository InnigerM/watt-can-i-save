import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private stateService: StateService) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.title = segments[segments.length - 1].path;
    });
  }

  reset(){
    this.stateService.resetState();
    const html = document.querySelector('html') as HTMLElement;
    html.dataset['theme'] = 'light';
    this.router.navigate(['/']);
  }
}
