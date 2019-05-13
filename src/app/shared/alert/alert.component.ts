import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';
import { AlertService } from 'src/app/service/alert.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'db-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('notificacao', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('0.2s', style({ opacity: 1}))
      ]),
      transition(':leave', [
        style({ opacity: 1}),
        animate('0.2s', style({ opacity: 0}))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  alert: Alert = {mensagem: 'Sistema de dashboard', tipo: AlertTipo.sucesso};
  status: boolean = false;
  private timer;
  private duracao: number = 2000;

  constructor(private servico: AlertService) {
    servico.alert.subscribe(alert=>{
      this.open(alert);
    });

    servico.closeEvent.subscribe(()=>{
      clearTimeout(this.timer);
      this.status = false;
    });
  }

  open(alert: Alert) {
    clearTimeout(this.timer);
    this.alert = alert;
    this.status = true;

    this.timer = setTimeout(()=>{
      this.status = false;
    }, this.duracao);
  }

  close(){
    clearTimeout(this.timer);
    this.status = false;
  }

  ngOnInit() {
  }

}
