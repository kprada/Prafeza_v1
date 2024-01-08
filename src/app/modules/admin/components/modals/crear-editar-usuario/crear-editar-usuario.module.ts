import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEditarUsuarioComponent } from './crear-editar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CrearEditarUsuarioComponent
  ],
  exports: [CrearEditarUsuarioComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,NzSelectModule,NzInputModule,NzButtonModule,MatDialogModule,NzDescriptionsModule,NzBadgeModule,MatButtonModule
  ]
})
export class CrearEditarUsuarioModule { }
