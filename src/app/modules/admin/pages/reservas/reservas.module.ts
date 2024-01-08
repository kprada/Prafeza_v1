import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';
import {MatChipsModule} from '@angular/material/chips';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    ReservasComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    MatChipsModule,NzRadioModule,FormsModule,ReactiveFormsModule,NzIconModule
  ]
})
export class ReservasModule { }
