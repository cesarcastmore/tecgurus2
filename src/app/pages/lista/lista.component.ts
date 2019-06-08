import { Component, OnInit } from '@angular/core';
import { Articulo, Electronico } from '../../model'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public articulos: Articulo[] = [];
  articulos$: Observable < any[] > ;

  articulos2: Articulo[] = [];

  constructor() {

  }


  public getObservableList(): Observable < any[] > {

    let articulos_observable: any[] = [];


    return new Observable((observer) => {

      setTimeout(() => {
        articulos_observable.push(new Electronico(2500.234, 'descripcion17', 'A', 'Titulo 7'));
        articulos_observable.push(new Electronico(343.244434, 'descripcion12', 'E', 'Titulo 43'));
        articulos_observable.push(new Electronico(32.244434, 'descripcion12', 'E', 'Titulo 3'));

        articulos_observable.push(new Electronico(4332.244434, 'descripcio44n12', 'E', 'Titulo 4'));
        observer.next(articulos_observable);


      }, 2000);


      setTimeout(() => {
        articulos_observable.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
        articulos_observable.push(new Electronico(432.244434, 'descripcion 12', 'E', 'Titulo 6'));
        articulos_observable.push(new Electronico(425.244434, 'descripcion 12', 'E', 'Titulo 6'));

        observer.next(articulos_observable);

      }, 7000);


      setTimeout(() => {
        articulos_observable.push(new Electronico(1200.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1000.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1300.43434, 'descripcion15', 'A', 'Titulo 5'));
        articulos_observable.push(new Electronico(1100.43434, 'descripcion15', 'A', 'Titulo 5'));

        articulos_observable.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
        observer.next(articulos_observable);

        observer.complete()
      }, 9000);

    });
  }

  ngOnInit() {

    this.articulos.push(new Electronico(32.244434, 'descripcion12', 'E', 'Titulo 2'));

    this.articulos.push(new Electronico(43.4342343, 'descripcion13', 'A', 'Titulo 3'));
    this.articulos.push(new Electronico(34, 'descripcion14', 'E', 'Titulo 4'));
    this.articulos.push(new Electronico(1200.43434, 'descripcion15', 'A', 'Titulo 5'));
    this.articulos.push(new Electronico(43.2343, 'descripcion16', 'E', 'Titulo 6'));
    this.articulos.push(new Electronico(2500.234, 'descripcion17', 'A', 'Titulo 7'));


    this.articulos$ = this.getObservableList();

    /* this.articulos$.subscribe(items=>{
       this.articulos2=items;

     });

     this.loadList();*/

  }


  async loadList() {
    this.articulos2 = await this.articulos$.toPromise();


  }

}