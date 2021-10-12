'use strict'
/*  ejer1.js
  Ejercicio 9 de Arrays
  Autor:Esperanza Rodríguez Martínez<erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
  Licencia:GPL v3 o superior
  Año 2021
*/
/*EJER 9: Realizar el siguiente ejercicio utilizando Arrays asociativo.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
según su saldo, sabiendo que:
Estado de la cuenta 'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.
*/
let banco= new Array()
banco["num_cuenta"] = 0;
banco["nombre_cliente"] = " ";
banco["saldo_actual"] = 0;
let text=" "
let sumaacreedores=0;

do{
    let num_cuenta=introducir(text="número de cuenta")
    banco["num_cuenta"] =num_cuenta
  if(banco["num_cuenta"]>0){
    let nombre_cliente=introducirn()
    banco["nombre_cliente"] =nombre_cliente
    let saldo_actual=introducir(text="Saldo actual")
    banco["saldo_actual"] =saldo_actual
    if(banco["saldo_actual"]>0){
      sumaacreedores=sumaacreedores+parseFloat(banco["saldo_actual"])
    }
  }else{
    console.log("Valor negativo en número de cuenta, programa finalizado")
    console.log("Suma total de los saldos acreedores: "+sumaacreedores)
  }
}while(banco["num_cuenta"]>0 ) 

function introducir(text){
  let num =0;
  do{
    num = prompt('Introduce '+text+': ');
  }while(isNaN(num) || num==" " || num=="" || num % 1 != 0) // num % 1 != 0 validamos introducir número entero
  return num;
}

function introducirn(){
  let nombre =" ";
  do{
    nombre = prompt('Introduce nombre de cliente: ');

  }while(!isNaN(nombre) || nombre==" " || nombre=="" );
  return nombre;
}
