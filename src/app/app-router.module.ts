import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoCumunesComponent } from './ventas/pages/no-cumunes/no-cumunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes: Routes = [

  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoCumunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot( routes )
  ],

})
export class AppRouterModule { }
