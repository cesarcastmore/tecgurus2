import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() price: number;
  @Input() description: string;

  name: string = 'cesar';

  constructor() {}

  ngOnInit() {}



}
