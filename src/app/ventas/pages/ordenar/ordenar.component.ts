import { Component, OnInit } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMauisculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
     {
      nombre: 'Lanterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiar()  {
    this.enMauisculas = !this.enMauisculas;
  }


  cambiarOrden(valor: string) {
    
    this.ordenarPor = valor;
   
  }





}
