import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
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

  @Output() onEdit: EventEmitter<Articulo> = new EventEmitter<Articulo>();

  constructor() {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    console.log("todos mis hijos renderizaron")
  }

  public edit(event: boolean){
    this.onEdit.emit(this.articulo);

  }

}
