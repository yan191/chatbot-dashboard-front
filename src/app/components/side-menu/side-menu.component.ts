import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'db-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  pagina: string = "home";

  constructor(
    private user: UserService,
    private route: Router
  ) { 
    this.pagina = this.route.url.replace('/','');
  }

  ngOnInit() {
  }

  logout() {
    this.user.logout();
  }

}
