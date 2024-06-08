import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { WebStorageUtil } from './util/web-storage-util';
import { Constants } from './util/constants';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    let userId: number = WebStorageUtil.get(Constants.USERID_KEY);
    let loggedIn: boolean = WebStorageUtil.get(Constants.LOGGED_IN_KEY);

    if(userId == -1 || userId == null || loggedIn == false || loggedIn == null){
      this.router.navigateByUrl('/not-authorized');
      return false;
    }

    return true;
  }
}
    
