import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  status: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  open(){
    this.status.next(false);
  }

  close(){
    this.status.next(true);
  }

}
