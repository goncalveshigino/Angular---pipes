import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

  name: string = 'Higino';
  value: number = 1000;

  //Objecto
  obj = {
    name: 'Katiavala'
  }
  
  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }

}
