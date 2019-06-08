import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../shared/services/articulos.service'
import { Articulo, Electronico, Abarrotes } from '../../model'
import { AuthService } from '../../shared/services/auth.service'

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css'],
  providers: [ ArticulosService ]
})
export class Lista2Component implements OnInit {


  constructor(public articulosService: ArticulosService,
  	public authService: AuthService) {
   }

  ngOnInit() {
  	this.articulosService.init();

    this.articulosService.cambio.subscribe(item=>{
      console.log(item);
    })

  }






}
