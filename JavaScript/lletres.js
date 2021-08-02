//Ejercicio 1 - en el original usamos la var comentada y quitamos la "function"

/* var nombre = "ALISSIA"; */

function devuelveArray() {
    var nombre = document.getElementById("nombre1").value.toUpperCase();
    var mi_nombre = Array.from(nombre);

    mi_nombre.forEach((letras) => console.log(letras));

};
 
//Ejercicio 2 - en el original usamos la var comentada y quitamos la "function"

/* var el_nombre = 'ALEJ3ANDRO'; */
function devuelveArrayComentado() {
    var el_nombre = document.getElementById("nombre2").value.toUpperCase();
    var su_nombre = [...el_nombre];
    console.log(`Partim del nom ${el_nombre}`);

    for (let i = 0; i < su_nombre.length; i++) {

        if (isNaN(su_nombre[i])) {
        
            var letra = su_nombre[i];
        
            if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
                console.log(`He trobat la VOCAL: ${letra}`);
            } else {
            
                console.log(`He trobat la CONSONANT: ${letra}`);
            }

             
        } else {
            console.log(`Els noms de persones no contenen el numero: ${su_nombre[i]}`);
    

        }
    }
};
/*
//Ejercicio 3 - amb mètode "reduce()"


var el_nombre1 = 'ALEJANDRO';
var su_nombre1 = [...el_nombre1];

var cantidadLetras = su_nombre1.reduce((contadorLetra, letra) => {
    contadorLetra[letra] = (contadorLetra[letra] || 0) + 1;
    return contadorLetra;
}, {});
console.log(cantidadLetras);
*/
//Ejercicio 3 - amb mètode "map()"

function las_letras_repetidas() { 
    
    var su_nombre1 = Array.from(document.getElementById("nombre3").value.toUpperCase());
    
    const unicos = [];
    su_nombre1.map((elemento) => {
    if (!unicos.includes(elemento)) {
        unicos.push(elemento);
    }
        return unicos;
    });
    var mapa = letras_repetidas(su_nombre1, unicos);
    const obj = Object.fromEntries(mapa);
    console.log(obj);
}

function letras_repetidas(nombre, letras){
    // Crear un Map que contiene las letras a repetir o no
    let map = new Map(letras.map(l => ([l, 0])));

    // comparamos el string dado y subimos el contador de las letras    
    for (const c of nombre)
    {
        if (map.has(c))
            map.set(c, map.get(c) + 1);
    }
    
    return map;
};

// Ejercicio 4 

function nombre_apellido() { 

    var name1 = Array.from(document.getElementById("nombre4").value.toUpperCase());
    var surname = Array.from(document.getElementById("apellido").value.toUpperCase());
    
    var fullName = [...name1, " ", ...surname];
    console.log(fullName);

};



//Ejercicio 5 (Nivel2)



function extractEmails()
{
    var text = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
    var resultado = [];
    var emails = [];
    emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+ñ*os.es\b)/gi);  
    emails.map(email => { 
        if (!resultado.includes(email)) { 
            resultado.push(email);
        }
        
    })
    for (email of resultado) {
         console.log(email);
    }
    
}



