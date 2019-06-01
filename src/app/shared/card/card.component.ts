import { Component, OnInit } from '@angular/core';
import {
  Articulo,
  Electronico,
  Abarrotes
} from '../../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  articulo: Articulo;
  contadorPadre: number=10;

  constructor() {}

  ngOnInit() {
    this.articulo = new Electronico(32, 'descripcion12', 'E', 'Titulo 2');

  }

}
