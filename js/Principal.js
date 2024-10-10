/*PROFESORES-A
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total.
*/
import Cl_Contratado from "./Cl_Contratado.js";
import Cl_Fijo from "./Cl_Fijo.js";
import Cl_Universidad from "./Cl_Universidad.js";

let fijo = new Cl_Fijo("Carlos", 25,100 );
let fijo2 = new Cl_Fijo("Carolina", 40, 90);
let Universidad = new Cl_Universidad();
Universidad.procesar(fijo);
Universidad.procesar(fijo2);

let salida = document.getElementById("Salida");
salida.innerHTML = `
<br> Nombre del profesor fijo: ${fijo.nombre} 
<br> Monto del bono: $${fijo.bono}
<br> Monto del sueldo: $${fijo.sueldo}
<br> Ingreso Total del profesor Carlos: $${fijo.pago()}<br>`

salida.innerHTML += `
<br> Nombre del profesor fijo: ${fijo2.nombre} 
<br> Monto del bono: $${fijo2.bono}
<br> Monto del sueldo: $${fijo2.sueldo}
<br> Ingreso total de la profesora Carolina: $${fijo2.pago()}`