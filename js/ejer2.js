'use strict'
/*  ejer1.js
  Ejercicio 2 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 2: Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.

let numeros= new Array()
let contmayor=0
let contigual=0
let contmenor=0

for(let i=0;i<10;i++){

    let numero=introducir()
    numeros[i]=numero
}

for(let i=0;i<10;i++){

    if(numeros[i]>7){
      contmayor++
    }else{
      if(numeros[i]==7){
        contigual++
      }else{
        contmenor++
      }
    }

}

console.log('Cantidad de números mayores a 7: '+contmayor)
console.log('Cantidad de números iguales a 7: '+contigual)
console.log('Cantidad de números menores a 7: '+contmenor)

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num < 0 || num > 10) 
  return num;
}
