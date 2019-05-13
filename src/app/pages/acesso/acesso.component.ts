import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'src/app/service/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';

@Component({
  selector: 'db-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  constructor(private titleService: Title, private notificacao: AlertService) {
    titleService.setTitle("Painel de acesso");
  }

  ngOnInit() {
  }

}
