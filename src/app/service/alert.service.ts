import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from 'src/app/model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Subject<Alert> = new Subject<Alert>();
  closeEvent: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  open(alert: Alert) {
    this.alert.next(alert);
  }

  close() {
    this.closeEvent.next(true);
  }
}
