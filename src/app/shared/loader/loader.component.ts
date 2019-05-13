import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'db-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  texto: string = "";
  status: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.openStatus.subscribe(status=>{
      this.status = status;
      this.texto = "";
    });

    this.loaderService.texto.subscribe(texto=>{
      this.texto = texto;
    });
  }

}
