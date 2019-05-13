import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'db-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() texto: string = "";
  @Input() status: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navegar() {
    this.route.navigate(['dashboard',this.texto]);
  }

}
