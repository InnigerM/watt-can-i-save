import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Challenges } from 'src/app/models/challenges.model';
import { Statistics } from 'src/app/models/statistics';
import { ChallengesService } from 'src/app/services/challenges.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() name = "";
  @Input() description = "";
  @Input() active = false;
  @Input() icon = "";
  @Input() imageSrc = "";
  statistics: Statistics;

  constructor(private router: Router, private challengesService: ChallengesService) {

  }

  ngOnInit(): void {
    this.statistics = this.challengesService.getStatistics(this.name.toLowerCase());
  }

  submit(){
    this.router.navigate(['categories', this.name.toLowerCase(), 'questions']);
  }

}
