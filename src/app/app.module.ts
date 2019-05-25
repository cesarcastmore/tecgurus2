import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardsComponent } from './pages/cards/cards.component';
import { ListaComponent } from './pages/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
