import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private loader: LoaderService
  ) { }

  authenticate(username: string, password: string ){
    this.loader.setText("Autenticando");
    return this.http.post(api+"login",{username, password}, {observe: 'response'})
    .pipe(
    map(response=>{
      const token = response.headers.get('Authorization').replace('Bearer','').trim();
      this.tokenService.setToken(token);
    }));
  }
}
