import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [CardComponent]
})
export class SharedModule {}
