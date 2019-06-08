import { Injectable, EventEmitter } from '@angular/core';
import { Electronico, Abarrotes, Articulo } from '../../model';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public articulos:Array<Articulo>= [];
  public cambio: EventEmitter<any>= new EventEmitter(true);

  constructor() {
   }

   public init():void{

   	this.articulos.push(new Electronico(2500.2, 'descripcion13', 'E', 'Titulo 7'))
   	this.articulos.push(new Abarrotes(2500.234, 'descripcion15', 'A', 'Titulo 7'))
   	this.articulos.push(new Abarrotes(2500.234, 'descripcion16', 'A', 'Titulo 7'))


   }

   public getArticulos(): Array<Articulo> {
     return this.articulos;
   }


   public pop(){
     this.articulos.pop();
   }


}
