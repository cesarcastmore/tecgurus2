import { Component, OnInit, 
  Input, AfterViewInit, 
  Output, EventEmitter, ViewChild, ViewChildren} from '@angular/core';
import {
  Articulo,
  Electronico,
  Abarrotes
} from '../../model';

import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input() articulo: Articulo;
  contadorPadre: number = 10;

  @Output() onEdit: EventEmitter < Articulo > = new EventEmitter < Articulo > ();

  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChild(BodyComponent) body: BodyComponent;

  constructor() {}

  ngOnInit() {

    this.header.setTitulo(this.articulo.titulo);

    this.body.setCategoria(this.articulo.categoria);
    this.body.setDescripcion(this.articulo.descripcion);
    this.body.setPrecio(this.articulo.precio);

  }

  ngAfterViewInit() {
    console.log("todos mis hijos renderizaron")
  }

  public edit(event: boolean) {
    this.onEdit.emit(this.articulo);

  }

}
