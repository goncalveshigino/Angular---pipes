import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-cumunes',
  templateUrl: './no-cumunes.component.html',
  styles: [
  ]
})
export class NoCumunesComponent  {

  //i18nSelect
  nome: string = 'Lídia';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Katiavala'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'Tenemos 1 cliente esperando',
    'other':  'tenemos # clientes esperando '
  }


  cambiarCliente() {
    this.nome = 'Gonza';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //KeyValuePipe
  persona = {
    nombre: 'Higino',
    edad: 24,
    direccion: 'Ottawa, Canadá'
  }


  //Json pipe
  heroes = [
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe
  MiObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
     
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
    

  });
}
