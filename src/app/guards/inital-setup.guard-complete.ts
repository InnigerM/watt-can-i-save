import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root'
})
export class InitalSetupComplete implements CanActivate {

  constructor(private router: Router, private stateService: StateService) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.stateService.isInitalSetupComplete()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
