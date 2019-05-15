import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'db-card-simple-number',
  templateUrl: './card-simple-number.component.html',
  styleUrls: ['./card-simple-number.component.css']
})
export class CardSimpleNumberComponent implements OnInit {

  @Input() texto: string = "data";
  @Input() subtexto: string = "";
  @Input() numero: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
