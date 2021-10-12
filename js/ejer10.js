'use strict'
/*  ejer1.js
  Ejercicio 10 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
/*EJER 10: Se realizó un censo provincial y se desea procesar la información obtenida en
dicho censo. De cada una de las personas censadas se tiene la siguiente
información: número de documento, edad y sexo ('femenino' o 'masculino').
Se pide confeccionar un programa que lea los datos de cada persona censada (para
finalizar ingresar el valor cero en el número de documento) e informar:

a) Cantidad total de personas censadas.
b) Cantidad de varones.
c) Cantidad de mujeres.
d) Cantidad de varones cuya edad varía entre 16 y 65 años.
*/
let censo= new Array()
censo["num_documento"] = 0;
censo["edad"] = 0;
censo["sexo"] = " ";
let text=" "
let conttotal=0;
let contvarones=0;
let contmujeres=0;
let contvaronesedad=0;

do{
    let num_documento=introducir(text="número de documento")
    censo["num_documento"] =num_documento
  if(censo["num_documento"]!=0){
    let edad=introducir(text="edad")
    censo["edad"] =edad
    let sexo=introducirn()
    censo["sexo"] =sexo

    conttotal++
    if(censo["sexo"]=="masculino"){
        contvarones++
        if(censo["edad"]>16 && censo["edad"]<65 ){
          contvaronesedad++
        }
    }else{
      contmujeres++
    }

  }else{
    console.log("Valor 0 en número de documento, programa finalizado")
    console.log("Cantidad de personas censadas: "+conttotal)
    console.log("Cantidad de personas varones: "+contvarones)
    console.log("Cantidad de personas mujeres: "+contmujeres)
    console.log("Cantidad de personas varines cuya edad varía entre 16 y 65 años: "+contvaronesedad)
  }
}while(censo["num_documento"]!=0 )

function introducir(text){
  let num =0;
  do{
    num = prompt('Introduce '+text+': ');
  }while(isNaN(num) || num==" " || num=="" || num < 0 || num % 1 != 0) // num % 1 != 0 validamos introducir número entero
  return num;
}

function introducirn(){
  let sexo =" ";
  do{
    sexo = prompt('Introduce sexo(masculino/femenino): ');

    if(sexo.toLowerCase().trim()!="masculino" && sexo.toLowerCase().trim()!="femenino"){
      console.log("Debe introducir masculino o femenino")
    }

  }while(!isNaN(sexo) || sexo==" " || sexo=="" || (sexo.toLowerCase().trim()!="masculino" && sexo.toLowerCase().trim()!="femenino") );

  return sexo;
}
