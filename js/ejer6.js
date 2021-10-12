'use strict'
/*  ejer1.js
  Ejercicio 6 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
/*EJER 6: En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
realizar un programa que lea los sueldos que cobra cada empleado e informe
cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
Además el programa deberá informar el importe que gasta la empresa en sueldos
al personal.*/

let empleados= new Array()
let cont1=0
let cont2=0
let sum3=0

for(let i=0;i<5;i++){

    let sueldo = prompt('Sueldo de empleado '+(i+1)+' :')
    sueldo=parseInt(sueldo)
    empleados[i]=sueldo
}

for(let i=0;i<5;i++){
    console.log('El empleado '+(i+1)+' cobra '+empleados[i])
    if(empleados[i]>100 && empleados[i]<300){
        cont1=cont1+1
    }
    if(empleados[i]>300){
        cont2=cont2+1
    }
    sum3=sum3+empleados[i]
}
console.log('Cantidad de empleados que cobran entre 100 y 300: '+cont1)
console.log('Cantidad de empleados que cobran más de 300: '+cont2)
console.log('Importe que gasta la empresa en sueldos al personal: '+sum3)
