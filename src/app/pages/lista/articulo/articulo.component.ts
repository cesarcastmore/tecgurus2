import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ArticulosService } from '../../../shared/services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

	public id: string;
  articulo: any;

  constructor(private ar: ActivatedRoute,
    private articulosService: ArticulosService) { 

  }

  ngOnInit() {

  	this.id = this.ar.snapshot.params["id"];

    this.articulosService.getArticulo(this.id).subscribe(respuesta=>{
      this.articulo= respuesta;
    })
  	




  }

}
