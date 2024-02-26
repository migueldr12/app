import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosAddPageRoutingModule } from './registros-add-routing.module';

import { RegistrosAddPage } from './registros-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosAddPageRoutingModule
  ],
  declarations: [RegistrosAddPage]
})
export class RegistrosAddPageModule {}
