import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { AlertService } from 'src/app/service/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private tokenService: TokenService,
        private notificacao: AlertService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
            if(!this.tokenService.hasToken()){
                this.notificacao.open({mensagem: 'Faça o login para ter acesso ao dashboard.', tipo: AlertTipo.erro});
                this.router.navigate(['']);
                return false;
            }else{
                if(this.tokenService.isExpired()){
                    this.notificacao.open({mensagem: 'Sessão expirada, faça o login novamente.', tipo: AlertTipo.erro});
                    this.tokenService.removeToken();
                   this.router.navigate(['']); 
                   return false;
                }
            }
            return true;
    }
}