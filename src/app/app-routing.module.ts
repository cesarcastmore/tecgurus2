import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { Lista2Component } from './pages/lista2/lista2.component';
import { InformacionComponent } from './pages/lista/informacion/informacion.component';
import { ContactosComponent } from './pages/lista/contactos/contactos.component'
import { ArticuloComponent } from './pages/lista/articulo/articulo.component'
import { PermisosGuard } from '../guards/permisos.guard';
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component';
import { CrudFirestoreComponent } from './pages/crud-firestore/crud-firestore.component';

const routes: Routes = [
  {
  path: 'lista_1',
  component: ListaComponent,
  children: [{
    path: 'informacion',
    component: InformacionComponent,

  }, {
    path: 'contactos',
    component: ContactosComponent
  }, {
    path: ':id',
    component: ArticuloComponent

  }],
}, {
  path: 'lista_2',
  component: Lista2Component,
  canActivate: [PermisosGuard],
}, {
  path: 'inventario',
  loadChildren: './inventario/inventario.module#InventarioModule'
}, {
  path: '',
  redirectTo: '/lista_1',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
},{ 
  path: 'crud-firestore',
component: CrudFirestoreComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
