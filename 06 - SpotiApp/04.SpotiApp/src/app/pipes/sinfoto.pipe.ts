import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[] ): string {

    let noimage = 'assets/img/noimage.png'

    if ( !value ) { // Si no viene una imagen en la petición, ponemos una imagen por defecto
      return noimage;
    }

    return ( value.length > 0 ) ? value [1].url : noimage; // es un if
  }

}
