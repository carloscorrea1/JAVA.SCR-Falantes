//alert("hola desde forma externa");-->
/*var nombre="carlos";
var apellido="tello"
alert("su nombre es: "+nombre+" "+apellido);
var num1=12;
var num2=15;
alert("la suma de "+num1+"y"+num2+"es:"+(num1+num2));
var respuesta = prompt("digite su nombre");
document.write("su respuesta es: "+respuesta);*/

/*var base= prompt("digite la base del trinangulo");
var altura= prompt("digite la altura del triangulo");
var area= ((base*altura)/2);
document.write("el area del triangulo es "+area+" metros");*/

// <--!taller 2.


/*PUNTO NUMERO 1 

1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.

*********************

*/
/*
var n = prompt("Digite la cantidad de numeros a sumar: ");

var acumulador = 0;

var contador = 0;

var control = 0;

var numeros = "";



while (n !== 'no') {

    numeros = numeros + n + " - ";

    acumulador = acumulador + parseInt(n);

    contador = contador + 1;

    n = prompt("Digite un numero: ");

    control++;

}

document.write("<P>" + "Los numeros fueron:" + numeros + "</p>" + "\n" + "<p>" + "La suma de los numeros fue: " + acumulador + "</p>" + "\n" + "<p>" + "el total de los numeros digitados: " + contador + "<p>");
*/
/*PUNTO NUMERO 2


2.	Hacer un programa que pida N notas, calcular el promedio de las notas aprobadas y el promedio de las notas desaprobadas; (Aprueba con un promedio de 3).  

****************************

*/

/*

var nota = parseInt(prompt("por favor ingrese la cantidad de notas"))
var suma = 0
var promedioa = 0
var promedior = 0
var reprobados = 0
var aprobados = 0

for (let i = 0; i < nota; i++) {

    valnota = parseInt(prompt("digita la nota " + (i + 1)));
    if (valnota < 3) {
        reprobados = reprobados + valnota;
        promedior = promedior + 1

    } else {
        aprobados = aprobados + valnota;
        promedioa = promedioa + 1

    }

}

document.write("<p>" + "el promedio de los reprobados es de : " + reprobados / promedior + "</p>")
document.write("<p>" + "el promedio de los aprobados es de : " + aprobados / promedioa + "</p>")

*/
/* PUNTO NUMERO 3

3.	Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.

****************************

*/
/*


var cantidad=0
var suma=0

do {
    var numero= parseInt(prompt("ingrese un numero "))
    var continuar = prompt("si desea detenerse escriba FIN de lo contrario ponga SI")
    cantidad=cantidad+1
    suma=suma+numero
    
    
} while (continuar!="FIN");

document.write("<p>"+"la cantidad de numeros es : "+cantidad+"</p>")
document.write("<p>"+"la suma de los numeros es : "+suma+"</p>")

*/

/* PUNTO NUMERO 4

4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.

****************************
*/
/*

var numero= prompt("por favor ingrese un numero")
var contador=0

for (i = 0; i < 30 ; i++) {
  contador=contador+1;
  document.write("<p>"+"la multiplicacion  de "+numero+"*"+contador+" es= "+contador*numero+"</p>")
  ;
  
}

*/

/* PUNTO NUMERO 5

5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.

****************************
*/
/*

var numero= prompt("por favor ingrese un numero")
var contador=10

for (i = 0; i <= 9 ; i++) {
  contador=contador-1;
  document.write("<p>"+"la multiplicacion  de "+numero+"*"+contador+" es= "+contador*numero+"</p>")
  ;
}
*/

/* PUNTO NUMERO 6

6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.

*/
/*

var numero= parseInt(prompt("por favor ingrese un numero para definir intervalos"))
var contador=0
var suma=0
do {
  suma=suma+numero;  
 document.write("<p>"+suma+"</p>")
  
} while (suma<30);

*/
/*
PUNTO NUMERO 6
7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.

*/

var numero= parseInt(prompt("por favor ingrese un numero para definir intervalos"))
var suma=30


do {
  suma=suma-numero;  
  document.write("<p>"+suma+"</p>")


} while (suma>0);


/* PUNTO 8.	
    Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5.*/
/*
for (i = 0; i <= 4; i++) {
    resultado = '';
    for (j = 0; j <= i; j++) {
        resultado += '* ';
    }
    
}
*/

/* PUNTO 9.
Digite un número (altura) y a partir de él cree una escalera invertida de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5. */
/*
for (i = 4; i >= 0; i--) {
    resultado = '';
    for (j = 0; j <= i; j++) {
        resultado += '* ';
    }
    
}


/*punto 10 
Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.

*/
/*
var compra = prompt("digite numero de productos si/no");
var con=0;
var totalcompra = o;
var totalventas=0;


while (compra != "no") {
    var con2=0;
document.write("<p>"+"cliente numero"+con+"</p>")
document.write("<p>"+"numero de productos"+compra+"</p>")

    while (con2<= parseInt(compra)) {
        var producto = prompt ("digite el valor del producto"+con2);
        document.write ("<p>"+"valor del producto"+con2+":"+producto+"</p>");
        totalcompra= totalcompra+parseInt(producto);
        con2++;
    }
    totalventas=totalventas+totalcompra;

    document.write("<p>"+"total compra del cliente del cliente"+con+"es:"+totalcompra+"</p>");
    compra=prompt("Ingrese cantidad de productos del siguiente cliente, digite no, si no desea seguir");
    
    compra=prompt("digite el numero de prdducos si/no");
    con++;
}
document.write ("<p>"+"total de clientes del dia fueron: "+ con+ "</p>")

document.write ("<p>"+"total de ventas el dia fueron: "+ totalventas+ "</p>") */

/*12.
var filas = prompt("digite filas");
var col = prompt ( " digite columnas");
var x = 1;
document.write("<table border='1'>");
while (x<=filas) {
    document.write("<tr>");
    var y =1;
    while (y<=col) {
        document.write("<td>");
        document.write(numero++);
        document.write("</td>");
        y++;
    }
 document.write("</tr>");
 x++
}document.write("</table>");*/