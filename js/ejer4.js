'use strict'
/*  ejer1.js
  Ejercicio 4 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
//EJER 4: Realizar un programa que pida la carga de dos vectores numéricos.
//Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.

let vector1= new Array()
let vector2= new Array()
let vector3= new Array()

console.log("Carga de números a vector 1")
for(let i=0;i<5;i++){

    let num=introducir()
    vector1[i]=num
}
console.log("Carga de números a vector 2")
for(let i=0;i<5;i++){

    let num=introducir()
    vector2[i]=num
}

for(let i=0;i<5;i++){

    vector3[i]=vector1[i]+vector2[i]
}

console.log("Visualización de vector 3 producto de la suma entre posiciones de vector 1 y 2")
for(let i=0;i<5;i++){

  console.log("Vector["+i+"]: "+vector1[i]+" + Vector["+i+"]: "+vector2[i]+" es: Vector 3["+i+"]:"+vector3[i])

}

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="")
  return parseFloat(num);
}
