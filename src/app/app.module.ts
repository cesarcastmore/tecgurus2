import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardsComponent } from './pages/cards/cards.component';
import { ListaComponent } from './pages/lista/lista.component';
import { Lista2Component } from './pages/lista2/lista2.component';
import { NavbarComponent } from './pages/lista2/navbar/navbar.component';
import { AuthService } from './shared/services/auth.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { InformacionComponent } from './pages/lista/informacion/informacion.component';
import { ContactosComponent } from './pages/lista/contactos/contactos.component';
import { ArticuloComponent } from './pages/lista/articulo/articulo.component';
import { LoginComponent } from './pages/login/login.component'


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './pages/register/register.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListaComponent,
    Lista2Component,
    NavbarComponent,
    InformacionComponent,
    ContactosComponent,
    ArticuloComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
