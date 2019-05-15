import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/model/user';

const api = environment.url;
const KEY = "user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private tokenService: TokenService, 
    private route: Router,
    private loader: LoaderService,
    private http: HttpClient
  ) { }

  logout() {
    window.localStorage.removeItem(KEY);
    this.tokenService.removeToken();
    this.route.navigate(['']);
  }

  getUsernameFromToken(){
    this.loader.setText("Buscando usuário logado");
    return this.tokenService.getTokenDecoded().sub;
  }

  private getUserByUsername(username: string){
    this.loader.setText("Buscando informações do usuário");
    const params = new HttpParams()
            .append('username', username);
    return this.http.get<User>(api+'user', { params});
  }

  getUser(){
    this.loader.setText("Iniciando busca de dados");
    var username = this.getUsernameFromToken();
    return this.getUserByUsername(username);
  }

  newUser(username: string, password: string, nomeCompleto: string, email: string) {
    this.loader.setText("Criando usuário");
    return this.http.post<User>(api+'register',{username, password, nomeCompleto, email});
  }


  saveLocalUser(user: User){
    window.localStorage.setItem(KEY, JSON.stringify(user));
  }

  getLocalUser(){
    return JSON.parse(window.localStorage.getItem(KEY));
  }

  hasLocalUser(){
    return !!window.localStorage.getItem(KEY);
  }
}
