import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private token: TokenService, private route: Router) { }

  logout() {
    this.token.removeToken();
    this.route.navigate(['']);
  }
}
