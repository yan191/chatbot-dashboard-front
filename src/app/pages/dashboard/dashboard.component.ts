import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/service/shared/loader/loader.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/shared/alert/alert.service';
import { AlertTipo } from 'src/app/model/alert-tipo.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private loader: LoaderService, 
    private userService: UserService,
    private notificacao: AlertService
  ) { 
  }

  ngOnInit() {
    this.userService.saveLocalUser(this.route.snapshot.data['user']);
    this.loader.close();
  }

}
