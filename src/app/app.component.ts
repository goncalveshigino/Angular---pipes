import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  constructor(private primeNGConfig: PrimeNGConfig) { }
  
  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }
   

  name: string = 'Higino';
  value: number = 1000;
  obj = { name: 'Katiavala'}
  
  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }

}
