import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

//Module personalizado
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localpt from '@angular/common/locales/pt-AO';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localpt);
registerLocaleData( localFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-AO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
