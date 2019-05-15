import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/model/user';
import { SideMenuService } from 'src/app/service/components/side-menu/side-menu.service';

@Component({
  selector: 'db-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  animations: [
    trigger('search', [
      state('open',style({
        'transform': 'scaleX(1)',
        'transform-origin': '0% 0%',
        opacity: '1'
      })),
      state('close',style({
        transform: 'scaleX(0.5)',
        'transform-origin': '0% 0%',
        opacity: '0',
      })),
      transition('open=>close', animate('.15s')),
      transition('close=>open', animate('.15s'))
    ])
  ]
})
export class SearchBarComponent implements OnInit {

  usuario: User;

  constructor(private userService: UserService,private sideMenuService: SideMenuService) { }

  ngOnInit() {
    this.usuario = this.userService.getLocalUser();
  }
  openSideMenu(){
    this.sideMenuService.open();
  }

  getNomeCompleto(){
    return this.usuario.nomeCompleto;
  }

  logout(){
    this.userService.logout();
  }

}
