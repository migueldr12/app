import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosPage } from './registros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosPage
  },
  {
    path: 'detalle-registro',
    loadChildren: () => import('./detalle-registro/detalle-registro.module').then( m => m.DetalleRegistroPageModule)
  },
  {
    path: 'registros-add',
    loadChildren: () => import('./registros-add/registros-add.module').then( m => m.RegistrosAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosPageRoutingModule {}
