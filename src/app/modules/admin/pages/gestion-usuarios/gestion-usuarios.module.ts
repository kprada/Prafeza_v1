import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { GestionUsuariosComponent } from './gestion-usuarios.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MatButtonModule} from '@angular/material/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { GestionAnexosModule } from '../../components/modals/gestion-anexos/gestion-anexos.module';
import { CrearEditarUsuarioModule } from '../../components/modals/crear-editar-usuario/crear-editar-usuario.module';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
  declarations: [
    GestionUsuariosComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,FormsModule, ReactiveFormsModule,
    NzTableModule,NzSelectModule,NzIconModule,NzInputModule,NzButtonModule,MatButtonModule,NzToolTipModule,MatDialogModule,GestionAnexosModule,
    CrearEditarUsuarioModule,NzTagModule
  ]
})
export class GestionUsuariosModule { }
