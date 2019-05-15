import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  openStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  texto: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  open(){
    this.openStatus.next(true);
  }
  setText(texto: string){
    this.texto.next(texto);
  }
  close(){
    this.openStatus.next(false);
  }
}
