import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoCumunesComponent } from './pages/no-cumunes/no-cumunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MaiusculasPipe } from './pipes/maiusculas.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MaiusculasPipe
  ],
  exports: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
