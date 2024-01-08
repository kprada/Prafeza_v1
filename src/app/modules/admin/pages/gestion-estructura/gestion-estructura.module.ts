import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GestionEstructuraRoutingModule } from './gestion-estructura-routing.module';
import { GestionEstructuraComponent } from './gestion-estructura.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    GestionEstructuraComponent
  ],
  imports: [
    CommonModule,
    GestionEstructuraRoutingModule,FormsModule, ReactiveFormsModule,
    NzDescriptionsModule,NzTableModule,NzSelectModule,NzIconModule,NzInputModule
  ]
})
export class GestionEstructuraModule { }
