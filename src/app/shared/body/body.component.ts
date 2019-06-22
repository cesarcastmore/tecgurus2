import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() price: number;
  @Input() description: string;
  @Input() categoria: string;

  name: string = 'cesar';

  constructor() {}

  ngOnInit() {
        console.log("ngOnInit body");

  }


  getColor(attr: string){
  	return 'yellow';
  }


  public setPrecio(precio: number){
    this.price= precio;
  }


  public getPrecio(): number{
    return this.price;
  }

  public setCategoria(categoria: string){
    this.categoria= categoria;
  }


  public getCategoria(): string{
    return this.categoria;
  }

    public setDescripcion(descripcion: string){
    this.description= descripcion;
  }


  public getDescripcion(): string{
    return this.description;
  }

}
