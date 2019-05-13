import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { AlertService } from 'src/app/service/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if (this.tokenService.hasToken()) {
      if(!this.tokenService.isExpired()){
        this.router.navigate(['dashboard']);
      }else{
        this.tokenService.removeToken();
      }
      return false;
    }
    return true;
  }


}
