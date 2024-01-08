import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEstructuraComponent } from './gestion-estructura.component';

const routes: Routes = [{ path: '', component: GestionEstructuraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEstructuraRoutingModule { }
