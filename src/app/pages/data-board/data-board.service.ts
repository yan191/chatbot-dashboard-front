import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { Feedback } from 'src/app/model/feedback';

const api = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DataBoardService {

  constructor(private http: HttpClient, private loader: LoaderService) { }

  getAllFeedback(){
    this.loader.setText("Buscando feedbacks");
    return this.http.get<Feedback[]>(api+"feedbacks");
  }

}
