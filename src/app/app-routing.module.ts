import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { Lista2Component } from './pages/lista2/lista2.component';
import { InformacionComponent } from './pages/lista/informacion/informacion.component';
import { ContactosComponent } from './pages/lista/contactos/contactos.component'
import { ArticuloComponent } from './pages/lista/articulo/articulo.component'
import { PermisosGuard } from '../guards/permisos.guard';

const routes: Routes = [{
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
