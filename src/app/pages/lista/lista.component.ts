import { Component, OnInit } from '@angular/core';
import { Articulo, Electronico } from '../../model'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public articulos: Articulo[] = [];

  constructor() {}

  ngOnInit() {

    this.articulos.push(new Electronico(32, 'descripcion12', 'E', 'Titulo 2'));

    this.articulos.push(new Electronico(43, 'descripcion13', 'E', 'Titulo 3'));
    this.articulos.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
    this.articulos.push(new Electronico(1200, 'descripcion15', 'E', 'Titulo 5'));
    this.articulos.push(new Electronico(43, 'descripcion16', 'E', 'Titulo 6'));
    this.articulos.push(new Electronico(2500, 'descripcion17', 'E', 'Titulo 7'));



  }

}
