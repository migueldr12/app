import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'registros',
    pathMatch: 'full',
  },
  {
    path: 'registros',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./registros/registros.module').then(
            (m) => m.RegistrosPageModule
          ),
      },
      {
        path: ':registroId',
        loadChildren: () =>
          import('./registros/detalle-registro/detalle-registro.module').then(
            (m) => m.DetalleRegistroPageModule
          ),
      },
    ],
  },
  {
    path: 'new-registro',
    loadChildren: () =>
      import('./registros/registros-add/registros-add.module').then(
        (m) => m.RegistrosAddPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
