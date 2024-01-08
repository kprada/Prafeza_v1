import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
     path: '',
     component: AdminComponent,
     children:[
        {
          path:'estructura',
          loadChildren: () => import('../../pages/gestion-estructura/gestion-estructura.module').then(m => m.GestionEstructuraModule)
        },
        {
          path:'usuarios',
          loadChildren: () => import('../../pages/gestion-usuarios/gestion-usuarios.module').then(m => m.GestionUsuariosModule)
        },
        {
          path:'reservas',
          loadChildren: () => import('../../pages/reservas/reservas.module').then(m => m.ReservasModule)
        },
        {
          path:'visitas',
          loadChildren: () => import('../../pages/visitas/visitas.module').then(m => m.VisitasModule)
        },
        {
          path:'cuentas',
          loadChildren: () => import('../../pages/gestion-cuentas/gestion-cuentas.module').then(m => m.GestionCuentasModule)
        }

     ]
     },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
