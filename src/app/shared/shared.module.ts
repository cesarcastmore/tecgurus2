import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [CardComponent]
})
export class SharedModule {}
