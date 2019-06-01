import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
export class CardComponent implements OnInit, AfterViewInit {

  @Input() articulo: Articulo;
  contadorPadre: number=10;

  constructor() {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    console.log("todos mis hijos renderizaron")
  }

}
