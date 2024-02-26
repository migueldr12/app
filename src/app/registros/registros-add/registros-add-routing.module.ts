import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosAddPage } from './registros-add.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosAddPageRoutingModule {}
