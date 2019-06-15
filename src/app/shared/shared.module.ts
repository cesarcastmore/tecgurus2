import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FiltrosPipe } from './pipes/filtros.pipe';
import { ContentComponent } from './content/content.component';
import { HttpClientModule}  from '@angular/common/http';

@NgModule({
  declarations: [CardComponent, HeaderComponent, BodyComponent, FooterComponent, MayusculasPipe, FiltrosPipe, ContentComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [CardComponent, FiltrosPipe]
})
export class SharedModule {}
