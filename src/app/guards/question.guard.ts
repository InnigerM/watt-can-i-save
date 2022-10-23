import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionGuard implements CanActivate {

  constructor(private router: Router, private stateService: StateService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.stateService.isQuestionSolved(next.params["category"])) {
      this.router.navigateByUrl(`/categories/${next.params["category"]}`);
      return false;
    } else {
      return true;
    }
  }

}
