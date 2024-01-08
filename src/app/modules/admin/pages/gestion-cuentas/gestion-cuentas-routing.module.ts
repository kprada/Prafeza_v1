import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCuentasComponent } from './gestion-cuentas.component';

const routes: Routes = [{ path: '', component: GestionCuentasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCuentasRoutingModule { }
