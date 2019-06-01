import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() contador: number;


  @Output() contadorChange: EventEmitter < number > = new EventEmitter < number > ();


  constructor() {}

  ngOnInit() {}

  onClick() {
    this.contador += 1;
    console.log("entro");
    this.contadorChange.emit(this.contador);
  }

}
