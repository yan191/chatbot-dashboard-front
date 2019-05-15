import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/shared/alert/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    usuario: new FormControl('',[Validators.required, Validators.minLength(3)]),
    senha: new FormControl('',[Validators.required, Validators.minLength(5)]),
    nomeCompleto: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email])
  });

  constructor(
    private notificacao: AlertService,
    private loader: LoaderService,
    private route: Router,
    private user: UserService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  getUsuarioError(){
      var usuario = this.registerForm.get('usuario');
      return usuario.hasError('required') ? 'Campo obrigatório' :
        usuario.hasError('minlength') ? 'Min. 3 caracteres' :
          "Error";
  }

  getSenhaError(){
    var senha = this.registerForm.get('senha');
    return senha.hasError('required') ? 'Campo obrigatório' :
      senha.hasError('minlength') ? 'Min. 5 caracteres' :
        "Error";
  }

  getNomeCompletoError(){
    var nome = this.registerForm.get('nomeCompleto');
    return nome.hasError('required') ? 'Campo obrigatório' :
      nome.hasError('minlength') ? 'Min. 10 Caracteres' :
      "Error";
  }

  getEmailError(){
    var email = this.registerForm.get('email');
    return email.hasError('required') ? 'Campo obrigatório' :
    email.hasError('email') ? 'Email inválido' :
    "Error";
  }

  onSubmit() {
    var usuario = this.registerForm.get('usuario').value;
    var senha = this.registerForm.get('senha').value;
    var nome = this.registerForm.get('nomeCompleto').value;
    var email = this.registerForm.get('email').value;
    this.loader.open();
    this.user.newUser(usuario, senha, nome, email)
    .subscribe(res=> {
      this.notificacao.open({mensagem: 'Usuário criado com sucesso.', tipo: AlertTipo.sucesso});
      this.login(usuario, senha);
    },
    (err)=>{
      this.notificacao.open({mensagem: 'Não foi possivel criar o usuário.', tipo: AlertTipo.erro});
    });
  }

  login(username: string, password: string) {
    this.loader.open();
    this.auth.authenticate(username, password)
    .subscribe(res=>{
      this.notificacao.open({mensagem: 'Login efetuado com sucesso!', tipo: AlertTipo.sucesso});
      this.route.navigate(['dashboard']);
    },
    ()=>{
      this.notificacao.open({mensagem: 'Não foi possivel efetuar a autenticação do usuário cadastrado, faça o login novamente.', tipo: AlertTipo.erro});
      this.route.navigate(['login']);
    });
  }

}
