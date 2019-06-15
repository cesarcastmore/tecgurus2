import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardsComponent } from './pages/cards/cards.component';
import { ListaComponent } from './pages/lista/lista.component';
import { Lista2Component } from './pages/lista2/lista2.component';
import { NavbarComponent } from './pages/lista2/navbar/navbar.component';
import {AuthService } from './shared/services/auth.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import {  ReactiveFormsModule } from '@angular/forms';
import { InformacionComponent } from './pages/lista/informacion/informacion.component';
import { ContactosComponent } from './pages/lista/contactos/contactos.component';
import { ArticuloComponent } from './pages/lista/articulo/articulo.component'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListaComponent,
    Lista2Component,
    NavbarComponent,
    InformacionComponent,
    ContactosComponent,
    ArticuloComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
        ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
