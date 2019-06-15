import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

	public id: string;

  constructor(private ar: ActivatedRoute) { 

  }

  ngOnInit() {

  	this.id = this.ar.snapshot.params["id"];
  	




  }

}
