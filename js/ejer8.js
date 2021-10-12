'use strict'
/*  ejer1.js
  Ejercicio 8 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 8: Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
//Emplear el operador "%" en la condición de la estructura condicional.
//if (valor%2==0)
//El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
//13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.

let vector= new Array()
let contpares=0
let contimpares=0

for(let i=0;i<5;i++){

    let num=introducir()
    vector[i]=num
}

for(let i=0;i<5;i++){

  if (vector[i]%2==0){
    contpares++
  }else{
    contimpares++
  }

}

console.log("Cantidad de números pares introducidos: "+contpares)
console.log("Cantidad de números impares introducidos: "+contimpares)

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num % 1 != 0) // num % 1 != 0 validamos introducir número entero
  return parseFloat(num);
}
