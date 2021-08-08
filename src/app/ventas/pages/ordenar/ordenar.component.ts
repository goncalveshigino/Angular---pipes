import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMauisculas: boolean = true;

  cambiar()  {
    this.enMauisculas = !this.enMauisculas;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
