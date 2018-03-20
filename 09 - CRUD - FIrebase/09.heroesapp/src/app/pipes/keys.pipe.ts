import { Pipe, PipeTransform } from '@angular/core';

// El pipe lo creamos para guardar la clave única que genera firebase para cada elemento

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    let keys = [];
    for (let key in value) {

      keys.push(key);

    }

    return keys;
  }

}
