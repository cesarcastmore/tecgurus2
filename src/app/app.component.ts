import { Component, OnInit } from '@angular/core';
import { Abarrotes } from './model/abarrotes';
import { Articulo } from './model/articulo';
import { Electronico } from './model/electronico';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tecgurus';

  articulo: Articulo;

  math: any = {
    sum: ((a: number, b: number) => {
      return a + b;
    }),
    divide: ((a: number, b: number) => {
      return a / b
    })
  }


  ngOnInit(): void {
    let items: any[] = [{
        nombre: 'cesar',
        id: 2,
        apellido: 'castillo'
      },
      {
        nombre: 'Alejandro',
        apellido: 'df',
        id: 1
      }
    ];

    for (let item of items) {

    }

    items.forEach((item) => {
      console.log(item);
    });

    let usuario: any = {
      nombre: 'cesar',
      apellido: 'castillo'
    };

    for (let attr in usuario) {
      console.log(attr);
      console.log(usuario[attr]);
    }

    let itemTemp: any[] = items.filter((item) => {
      return item.nombre == 'cesar';
    })

    let item: any = items.find((item) => item.id == 1);
    console.log(item);

    let numeros: Array < number >= [5, 34, 2, 53, 45, 3, 5, 3, 443];

    let mayores = numeros.filter((numero) => {
      return numero > 40;
    })

    let tipo: string="abarratos";

    if(tipo == "abarrotes"){
      this.articulo = new Abarrotes(32, 'descripcion1', 'A', 'Titulo 1');
    }else if(tipo == "electronico"){
      this.articulo= new Electronico(32, 'descripcion12', 'E', 'Titulo 2');
    }

    //console.log(this.articulo.calcularDescuento());




  }

}
