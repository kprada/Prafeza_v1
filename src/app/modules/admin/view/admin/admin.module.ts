import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzTabsModule,MatTabsModule
  ]
})
export class AdminModule { }
