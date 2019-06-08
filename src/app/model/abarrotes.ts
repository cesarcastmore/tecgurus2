import { Articulo } from './articulo';

export class Abarrotes implements Articulo {

  precio: number;
  descripcion: string;
  categoria: string;
  titulo: string;
  id: string;

  constructor( precio: number, descripcion: string,
    categoria: string, titulo: string, id?: string) {
    this.precio = precio;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.titulo = titulo;
    this.id= id;


  }

  calcularDescuento(): number {
    return this.precio * 0.80;

  }

  subir(): void {

  }
}
