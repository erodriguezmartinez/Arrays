'use strict'
/*  ejer1.js
  Ejercicio 7 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 7: Realizar un programa que permita cargar dos listas de 3 valores cada una.
//Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
//(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
//Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

let vector1= new Array()
let vector2= new Array()
let cantvector1=0
let cantvector2=0

console.log("Carga de números a vector 1")
for(let i=0;i<3;i++){

    let num=introducir()
    vector1[i]=num
}
console.log("Carga de números a vector 2")
for(let i=0;i<3;i++){

    let num=introducir()
    vector2[i]=num
}

for(let i=0;i<3;i++){

    cantvector1=cantvector1+vector1[i]
    cantvector2=cantvector2+vector2[i]
}

if(cantvector1==cantvector2){
  alert("Listas iguales")
}else{
  if(cantvector1>cantvector2){
    alert("Listas 1 mayor")
  }else{
    alert("Listas 2 mayor")
  }
}

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="")
  return parseFloat(num);
}
