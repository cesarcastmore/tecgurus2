import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../shared/services/articulos.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public articulosService: ArticulosService) {
   }

  ngOnInit() {
  }


  public onCick(){
  	this.articulosService.cambio.emit('cambio');
  }


}
