import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,

    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: LOCALE_ID, useValue: 'es' },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
