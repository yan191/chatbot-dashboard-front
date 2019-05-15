import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { SideMenuService } from 'src/app/service/components/side-menu/side-menu.service';

@Component({
  selector: 'db-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  pagina: string = "home";
  hide: boolean = true;

  constructor(
    private user: UserService,
    private route: Router,
    private menuService: SideMenuService
  ) { 
    route.events.subscribe(res=>{
      var rota = route.url.replace('/dashboard','');
      if(rota == '' || rota == '/'){
        this.pagina = 'home';
      }else{
        this.pagina = rota.replace('/','');
      }
    });
  }

  ngOnInit() {
    this.menuService.status
    .subscribe(status=>{
      this.hide = status;
    });
  }

  close(){
    this.hide = true;
  }

  logout() {
    this.user.logout();
  }

}
