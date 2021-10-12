'use strict'
/*  ejer1.js
  Ejercicio 3 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 3: Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

let alturas= new Array()
let sumaalturas=0
let promaltura=0

for(let i=0;i<5;i++){

    let altura=introducir()
    alturas[i]=altura
}

for(let i=0;i<5;i++){

  sumaalturas=sumaalturas+parseFloat(alturas[i])
  console.log(sumaalturas)
}

promaltura=(sumaalturas/5)

console.log('Altura promedio de las alturas introducidas: '+promaltura)

function introducir(){
  let altura =0;
  do{
    altura = prompt('Introduce altura: ');
  }while(isNaN(altura) || altura==" " || altura=="" || altura < 0)
  return altura;
}
