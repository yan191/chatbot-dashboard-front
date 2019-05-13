import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private notificacao: AlertService) { }

  ngOnInit() {
  }

  registrar() {
    this.notificacao.open({mensagem: 'Sistema em desenvolvimento',tipo: AlertTipo.aviso});
  }

}
