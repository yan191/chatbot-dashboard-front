import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/shared/alert/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'db-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private notificacao: AlertService,
    private auth: AuthService,
    private loader: LoaderService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  getUsuarioError() {
    var usuario = this.loginForm.get('usuario');
    return usuario.hasError('required') ? 'Campo obrigatório' :
      usuario.hasError('minlength') ? 'Min. 3 caracteres' :
        "Error";
  }

  getSenhaError() {
    var senha = this.loginForm.get('senha');
    return senha.hasError('required') ? 'Campo obrigatório' :
      senha.hasError('minlength') ? 'Min. 5 caracteres' :
        "Error";
  }

  onSubmit() {
    var usuario = this.loginForm.get('usuario').value;
    var senha = this.loginForm.get('senha').value;
    this.loader.open();
    this.auth.authenticate(usuario, senha).subscribe(res => {
      this.notificacao.open({ mensagem: 'Login efetuado com sucesso!', tipo: AlertTipo.sucesso });
      this.route.navigate(['dashboard']);
    },
      () => {
        this.notificacao.open({ mensagem: 'Não foi possivel efetuar o login!', tipo: AlertTipo.erro });
      });
  }

}
