
/*
 * Parámetro obligatorio: es aquel necesario para que la funcion funcione correctamente, es el caso de "quien"
 * Parámetro por defecto: es aquel que nosotros podemos enviar o no a la funcion, pero que por defecto tiene un valor,
 *  en este caso es "objeto" al que le damos por defecto el valor "batseñal"
 * Parámetro opcional: es aquel que puede ser enviado a la funcion pero dentro de la funcion tiene un default,
 *  es el ejemplo del objeto "momento", y en funcion de si viene valor o no con un IF hacemos una cosa, u otra.
 *  El primer elemento de la funcion no puede ser opcional
 */

function activar( quien:string, 
                  objeto:string = "batseñal",
                  momento?:string) { 

    let mensaje:string;

    if ( momento ){
        mensaje = `${ quien } activó la ${ objeto } por la ${ momento }`;
    }else{
        mensaje = `${ quien } activó la ${ objeto }`;
    }

    

    console.log(mensaje);

}

activar("Gordon", "batseñal", "tarde");