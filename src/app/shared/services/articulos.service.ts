import { Injectable, EventEmitter } from '@angular/core';
import { Electronico, Abarrotes, Articulo } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public articulos: Array < Articulo >= [];
  public cambio: EventEmitter < any >= new EventEmitter(true);
  public url: string = 'https://tecgurus-e7115.firebaseio.com/articulos';


  constructor(private httpClient: HttpClient) {

  }

  public init(): void {

    this.articulos.push(new Electronico(2500.2, 'descripcion13', 'E', 'Titulo 7'))
    this.articulos.push(new Abarrotes(2500.234, 'descripcion15', 'A', 'Titulo 7'))
    this.articulos.push(new Abarrotes(2500.234, 'descripcion16', 'A', 'Titulo 7'))


  }

  public getArticulos(): Array < Articulo > {
    return this.articulos;
  }

  public getArticulosOb(): Observable < any > {

    return this.httpClient.get < any > (this.url + '.json');

  }


  public pop() {
    this.articulos.pop();
  }


  public createArticulo(articulo: Articulo): Observable < any > {

    return this.httpClient.post < any > (this.url + '.json', articulo);

  }

  public updateArticulo(articulo: Articulo): Observable < any > {
    return this.httpClient.put < any > (this.url + '/' + articulo.id + '.json', articulo);

  }

  public deleteArticulo(articulo: Articulo): Observable < any > {
    return this.httpClient.delete < any > (this.url + '/' + articulo.id + '.json');
  }


  public getArticulo(id: string): Observable < any > {

    return this.httpClient.get < any > (this.url + '/' + id + '.json');

  }
}
