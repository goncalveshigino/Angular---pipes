import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

    ngOnInit() {

        this.items = [
            {
                label: 'pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Texto e Datas',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                     {
                        label: 'Números',
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    },
                      {
                        label: 'No Comunes',
                        icon: 'pi pi-globe',
                        routerLink: 'no-comunes'
                    }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog'
            }
          
        ];
    }

}
