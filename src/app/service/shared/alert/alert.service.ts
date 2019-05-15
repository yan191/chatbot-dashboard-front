import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from 'src/app/model/alert';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Subject<Alert> = new Subject<Alert>();
  closeEvent: Subject<boolean> = new Subject<boolean>();

  constructor(private loader: LoaderService) { }

  open(alert: Alert) {
    this.loader.close();
    this.alert.next(alert);
  }

  close() {
    this.closeEvent.next(true);
  }
}
