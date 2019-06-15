import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  declarations: [EntradasComponent, SalidasComponent, InventarioComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
