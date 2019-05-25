import { Articulo } from './articulo';

export class Electronico implements Articulo {
  precio: number;
  descripcion: string;
  categoria: string;
  titulo: string;



  constructor(precio: number, descripcion: string,
    categoria: string, titulo: string) {
    this.precio = precio;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.titulo = titulo;


  }

  
  calcularDescuento(): number {
    return this.precio * 0.70;

  }

  subir(): void {

  }

}
