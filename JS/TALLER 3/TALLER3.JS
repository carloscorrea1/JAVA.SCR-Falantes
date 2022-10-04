/**
 *


function saludar(nombre){
    document.write("Hola"+nombre)
}

var nom= prompt("digire su nombre")

saludar(nom); 

function saludar(numero){
    document.write("el numero fue: "+numero+" ")
    return parseInt(numero) + 10;
}

var nom= prompt("digire un numero")

document.write("la suma es:"+  saludar(nom));*/

/*funcion expresada*/

/*function saludar(numero){
    document.write("el numero fue: "+numero+" ")
    //transformar el dato//
    return parseInt(numero) + 10;
}

var nom= prompt("digire un numero");

var resultadofuncion = saludar(nom)
//ejecutar

document.write("la suma es:"+ resultadofuncion);

function suma (num1,num2)
{
return parseInt(num1)+parseInt(num2);

}
var num1= prompt("digite el numero 1");
var num2= prompt("ingrese numero 2");
 

document.write ( "la suma es igual a: "+suma(num1,num2));*/

/*punto 2

function velocmetro(val){
return ( parseInt(val)*1000)

}

function velocmill(val){
return ( parseInt (val)* 0.621371)

}

var val = prompt ( "ingrese la velocidad en Km/h que desea covertir");





var velocidadMetros= velocmetro(val);
var velocmilla = velocmill(val);

document.write ( "la velocidad en "+val+" en metros por hora es: "+velocidadMetros);
document.write ( "la velocidad en "+val+" en millas  por hora es: "+velocmilla);
*/
/*
7.Cree un conversor de temperatura, investigando la fórmula para pasar grados Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 37°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 38°C  o 100°F : Tiene fiebre o es el apocalipsis.
*/


/*
var opc = prompt ("Marque 1. si la temperatura se encuentra en celsius. o 2. si la temperatura se encuentra en farenheint: ")

switch (parseInt(opc)) {
    case 1: var temperatura= prompt("por favor ingrese la temperatura a convertir:" );
            function tem_faren(temperatura){
            return ((parseInt(temperatura)*1.8)+32)}
            var fare = tem_faren(temperatura);
            document.write("la temperatura en farenheint es "+fare);
        break;
    case 2:
        var temperatura= prompt("por favor ingrese la temperatura a convertir:" );
        function tem_cels(temperatura){
        return ((parseInt(temperatura)-32)*0.55)}
        var cel = tem_cels(temperatura);
        document.write("la temperatura en celsius es "+cel);
    
        break;
    }
*/
//voy aqui// sigue objetos y arreglos.

//llenar un objet

/*
var datos = {
"nombre":"",
"apellido":"",
"edad":"",

}
*/
// forma larga Object.defineProperty(datos,"profesion",{enumerable:true,writable:true,configurable:true,value:""});
// formo corta
/*var datos2={
    "profesion":"",
    "telefono":"",
}
Object.assign(datos,datos2);
var array = Object.assign(datos,datos2)

// declaro varibale referencia cosnt itera con el objeto


for (const key in datos) {
datos [key] = prompt("digite: "+key);
}



for (const k in datos) {
    
    document.write ("su "+k+" es: "+datos[k]+"<br>");
    
}

console.log(Object.entries(datos))
console.log(array)

//Punto 14,15,16
/*
var numeros  = [29,5,40,10,35,42,12,22,25,1,3];
var numeroAscendente= numeros.sort(function(a,b){return a-b});
document.write(numeroAscendente);
*/


// punto 17//
/*
document.write("<h1>Punto 17</h1>");

var organizados = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

var numerosRandom = [];

numerosRandom = organizados.sort(
function()
{return Math.random()- 0.5}
);




document.write(numerosRandom+"<br>");*/

4. /*Cree un listado de empleados, pida los siguientes datos al usuario: nombre, cargo, salario; 
 * guarde los datos en un objeto, y muestre el listado de al menos 5 empleados en html.*/

//crear un objeto
/*
var Arraydatos = [];
    for (var i=1; i<=5; i++) {
        var dato = {
            "nombre": prompt("Digite nombre: " + i),
            "cargo": prompt("Digite cargo: " + i),
            "salario": prompt("Digite salario: " + i)
        }
        Arraydatos.push(dato);        
    }
    //mostrar datos del objeto
    
    for(var i in Arraydatos) {
        document.write("los datos de los empleados son: <br>");
        document.write("Nombre: " + Arraydatos[i]["nombre"]+"<br>");
        document.write("Cargo: " + Arraydatos[i].cargo+"<br>");
        document.write("Salario: " + Arraydatos[i].salario+"<br>");
    }




*/

/*5. Llene una tabla de productos en html; pida los siguientes datos del producto: nombre, presentación, 
 * valor; guarde los datos en un objeto, y muestre al menos 5 productos en la tabla.*/

/*
 var cajitaproducto = []
 for (var i=1; i<=3; i++) {
     var dato = {
         "nombre": prompt("Digite nombre del producto: " + i),
         "presentacion": prompt("Digite presentacion del producto: " + i),
         "valor": prompt("Digite el valor: " + i)
     }
     cajitaproducto.push(dato);        
 }
 //mostrar datos del objeto
 
 for(var i in cajitaproducto) {
     document.write("<br> Los datos de los productos son: <br>");
     document.write("Nombre: " + cajitaproducto[i]["nombre"]+"<br>");
     document.write("Presentación: " + cajitaproducto[i].presentacion+"<br>");
     document.write("Valor: " + cajitaproducto[i].valor+"<br>");
 }
*/

/*11.    Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer número, 
 el último, el del centro.*/

 //primera forma
 /*var datos =     ["3", "5", "9", "10", "35", "42", "12", "22", "25"];
 document.write("El primer numero es: "+datos[0], " El ultimo numero es: "+datos[0], " El numero del centro es: "+datos[4]);
//tambien se puede hacer para el ultimo con .length-1

 */

/*12.     Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los 
 números pares y los impares.
*/
/*

var i;
    var arreglo =[3,5,9,10,35,42,12,22,25];
    for (i=0; i<9; i++) {
        if (arreglo[i]%2 ==0) {
            document.write("Es par: "+arreglo[i]+" ");
        } else {
            document.write("Es impar: "+arreglo[i]+" ");
        }
}*/

/*13. Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] mostrar en html 
 * en cual  posición se encuentran las frutas y en cual posición las verduras.*/

 /*

 var datos = ["tomate","banano","manzana","pera","cebolla","papa","fresas","Ajo","Sandía"];
 var frutas = ["banano","manzana","pera","fresas","Sandía"];
 var verduras = ["tomate","cebolla","papa","Ajo"];
 for (let i = 0; i < frutas.length; i++) {
     document.write("La fruta: "+frutas[i]+" esta en la posicion "+datos.indexOf(frutas[i])+ '</br>');           
 }
 for (let i = 0; i < verduras.length; i++) {
     document.write("La verduras: "+verduras[i]+" esta en la posicion "+datos.indexOf(verduras[i])+ '</br>');
 }

 */
/*
 var aleatorios1 = [3,5,9,10,35,42,12,22,25];
 var aleatorios2 = [9,5,33,12,7,20,22,3,8];
 let sumaArray1 = 0
 let sumaArray2 = 0
 for (let index = 0; index < aleatorios1.length; index++) {
     sumaArray1 += aleatorios1[index]
     sumaArray2 += aleatorios2[index]
     document.write(aleatorios1[index] +"+"+aleatorios2[index]+"="+ (aleatorios1[index] + aleatorios2[index]) + "<br>");
 }
 document.write(sumaArray1 +"+"+sumaArray2+"="+ (sumaArray1 + sumaArray2) + "<br>");*/


 //12 ingresando los datos//

 
 var pares = [];
 var impar = [];
 var posicion =0;
 var posicion2=0;
 var numero = parseInt(prompt("ingrese el numero de numeros: "));
 var numeros=[];
 for (var i = 0; i < numero; i++) {
        
            numeros[posicion]=parseInt(prompt("ingrese el numero: "))

        if (numeros[i] %2 ==0) {
            pares[posicion]=numeros[i]
            document.write("Es par: "+pares[posicion]+" ");
        } else {
            impar[posicion2]=numeros[i]
            document.write("Es impar: "+impar[posicion2]+" ");
        }
        posicion++;

         
        console.log(numeros);



    } 
    
   
    
 