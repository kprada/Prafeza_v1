import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
/*   { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'login', loadChildren: () => import('./modules/auth/view/login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/view/admin/admin.module').then(m => m.AdminModule) }, */
  {
    //CONTENIDO PRINCIPAL NAVBAR,SIDEBAR ETC
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/shared/view/contenido/contenido.module').then(
        (m) => m.ContenidoModule
      ),
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/view/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
