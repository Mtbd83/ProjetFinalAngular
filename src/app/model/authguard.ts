import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../service/user.service';
import {Injectable} from '@angular/core';

@Injectable()
export class Authguard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.userService.isLogged()) {
      return true;
    }
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/user'], {
          queryParams: {
            redirectUrl
          }
        }));
    return false;
  }
}
