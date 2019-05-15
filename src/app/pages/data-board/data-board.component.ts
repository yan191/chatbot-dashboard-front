import { Component, OnInit } from '@angular/core';
import { DataBoardService } from './data-board.service';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { Feedback } from 'src/app/model/feedback';
import { AlertService } from 'src/app/service/shared/alert/alert.service';
import { Router } from '@angular/router';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';
import { FeedbackExpectation } from 'src/app/model/feedback-expectation.enum';

@Component({
  selector: 'app-data-board',
  templateUrl: './data-board.component.html',
  styleUrls: ['./data-board.component.css']
})
export class DataBoardComponent implements OnInit {

  feedbacks: Feedback[] = [];

  quantidade: number = 0;
  score: number = 0;
  jogado: number = 0;
  quer: number = 0;
  naoQuer: number = 0;
  tempoJogado: number = 0;

  constructor(
    private dataBoardService: DataBoardService, 
    private loader: LoaderService,
    private notificacao: AlertService,
    private route: Router
  ) { }

  ngOnInit() {
    this.loader.open();
    this.dataBoardService.getAllFeedback()
    .subscribe(feedbacks => {
      this.feedbacks = feedbacks;
      this.generateInfo();
      this.loader.close();
    },
    ()=>{
      this.notificacao.open({mensagem: 'Não foi possivel carregar dados de feedback, tente novamente', tipo: AlertTipo.erro});
      this.route.navigate(['dashboard']);
    });
  }

  private generateInfo(){
    this.quantidade = this.feedbacks.length;
    this.gerarScore();
    this.gerarJogado();
    this.gerarQuer();
    this.gerarNaoQuer();
    this.gerarTempoJogado();
  }

  private gerarScore(){
    var soma = 0;
    var quantidade = 0;
    for(var x=0; x<this.feedbacks.length; x++){
      if(this.feedbacks[x].expectation == FeedbackExpectation.jogado){
        quantidade++;
        soma = soma + this.feedbacks[x].rating;
      }
    }
    var final = (soma / quantidade).toFixed(2);
    this.score = parseInt(final);
  }

  private gerarJogado(){
    var soma = 0;
    for(var x=0; x<this.feedbacks.length; x++){
      if(this.feedbacks[x].expectation == FeedbackExpectation.jogado){
        soma++;
      }
    }
    this.jogado = soma;
  }

  private gerarQuer(){
    var soma = 0;
    for(var x=0; x<this.feedbacks.length; x++){
      if(this.feedbacks[x].expectation == FeedbackExpectation.quer){
        soma++;
      }
    }
    this.quer = soma;

  }

  private gerarNaoQuer(){
    var soma = 0;
    for(var x=0; x<this.feedbacks.length; x++){
      if(this.feedbacks[x].expectation == FeedbackExpectation.naoQuer){
        soma++;
      }
    }
    this.naoQuer = soma;
  }

  private gerarTempoJogado(){
    var soma = 0;
    var quantidade = 0;
    for(var x=0; x<this.feedbacks.length; x++){
      if(this.feedbacks[x].expectation == FeedbackExpectation.jogado){
        quantidade++;
        soma = soma + this.feedbacks[x].timePlayed;
      }
    }
    var final = (soma/quantidade).toFixed(2);
    this.tempoJogado = parseInt(final);
  }

}
