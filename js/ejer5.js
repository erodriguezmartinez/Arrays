'use strict'
/*  ejer1.js
  Ejercicio 5 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 5: Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
//El valor acumulado de todos los elementos del vector.
//El valor acumulado de los elementos del vector que sean mayores a 36.
//Cantidad de valores mayores a 50.

let vector= new Array()
let canttotal=0
let cantmas36=0
let contmas50=0

for(let i=0;i<8;i++){

    let num=introducir()
    vector[i]=num
}
for(let i=0;i<8;i++){

    canttotal=canttotal+vector[i]
    if(vector[i]>36){
        cantmas36=cantmas36+vector[i]
    }
    if(vector[i]>50){
        contmas50++
    }
}

console.log("Suma de todos los valores acumulados en el vector: "+canttotal)
console.log("Suma de todos los valres mayores de 36 acumulados en el vector: "+cantmas36)
console.log("Cantidad de valores mayores a 50 acumulados en el vector: "+contmas50)

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="")
  return parseFloat(num);
}
