import { Articulo } from './articulo';

export class Abarrotes implements Articulo {

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
    return this.precio * 0.80;

  }

  subir(): void {

  }
}
