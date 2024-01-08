import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionAnexosComponent } from './gestion-anexos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MatDialogModule } from '@angular/material/dialog';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
/* import { NgxColorsModule } from 'ngx-colors'; */
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [GestionAnexosComponent
  ],
  exports: [GestionAnexosComponent],

  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,NzTabsModule,NzCollapseModule,NzTagModule,MatDialogModule,NzButtonModule,NzDescriptionsModule,NzSelectModule,NzInputModule,NzDatePickerModule,NzIconModule/* NgxColorsModule */
  ]
})
export class GestionAnexosModule { }
