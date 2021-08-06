import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nameLower: string = 'higino';
  nameUpper: string = 'HIGINO';
  name: string = 'GoncAlVes hIginO';


  data: Date  = new Date();

  constructor() { }



}
