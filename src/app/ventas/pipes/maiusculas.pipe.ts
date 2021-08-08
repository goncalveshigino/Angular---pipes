import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'maiusculas'
})
export class MaiusculasPipe  implements PipeTransform{

    transform(valor: string, enMaiusculas: boolean = true): string {

        // if ( enMaiusculas ) {
        //    return valor.toUpperCase();
        // } else {
        //     return valor.toLocaleLowerCase();
        // }

        return (enMaiusculas)
            ? valor.toUpperCase()
            : valor.toLowerCase();
        
  }

}