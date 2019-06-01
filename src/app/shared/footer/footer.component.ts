import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy,
OnChanges {

  @Input() contador: number;


  @Output() contadorChange: EventEmitter < number > = new EventEmitter < number > ();


  constructor() {
    console.log(this.contador);
  }

  ngOnInit() {
    console.log("ngOnInit footer");

  }

  onClick() {
    this.contador += 1;
    console.log("entro");
    this.contadorChange.emit(this.contador);
  }

  public ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  public ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log("cur", cur);
      console.log("prev", prev);

    }
  }

}
