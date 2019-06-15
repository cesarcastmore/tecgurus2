import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [{
	path: '',
	component: InventarioComponent,
	children: [{
		path: 'entradas',
		component: EntradasComponent
	},{
		path: 'salidas',
		component: SalidasComponent
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
