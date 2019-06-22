import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('titulo') title: string;

  config_Mayucylas: any = {
  	mayusculas: true
  }

  constructor() {}

  ngOnInit() {
    console.log("ngOnInit header");

  }

  public setTitulo(titulo: string){
    this.title= titulo;
  }

  public getTitulo():string {
    return this.title;
  }

}
