import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'db-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() texto: string = "";

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navegar(){
    this.route.navigate(['dashboard', this.texto]);
  }

}
