'use strict'
/*  ejer1.js
  Ejercicio 1 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 1: Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.

let numeros= new Array()
let suma=0

for(let i=0;i<10;i++){

    let numero=introducir()
    numeros[i]=numero
}

for(let i=5;i<10;i++){

    suma=suma+numeros[i]

}

console.log('Suma total de los 5 últimos números introducidos: '+suma)

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="") 
  return num;
}
