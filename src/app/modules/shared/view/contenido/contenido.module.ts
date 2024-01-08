import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,NzLayoutModule,
    NzMenuModule,MatSidenavModule,MatListModule,MatToolbarModule,MatIconModule,MatButtonModule
  ]
})
export class ContenidoModule { }
