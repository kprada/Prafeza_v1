import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
/*   { path: 'admin', loadChildren: () => import('../../../admin/view/admin/admin.module').then(m => m.AdminModule) }, */

  { path: 'admin',
  canActivate: [AuthGuard],
  component: ContenidoComponent,
  children:[
    { path: '', loadChildren: () => import('../../../admin/view/admin/admin.module').then(m => m.AdminModule) }
  ]
  },
  /* { path: 'propietario',
  component: ContenidoComponent,
  children:[
    { path: '', loadChildren: () => import('../../../admin/view/admin/admin.module').then(m => m.AdminModule) }
  ]
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
