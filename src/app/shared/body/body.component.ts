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



}
