//punto 1
var h1 = document.createElement("h1");
var texto = document.createTextNode("mi presentacion");
h1.appendChild(texto);
var div = document.querySelector("div");
div.insertAdjacentElement("beforebegin",h1)

// punto 2
//Con el código del ejercicio anterior, cree una etiqueta p con el texto “my best friend is mickey” y ubiquela  después del p que está dentro del div.

var p = document.createElement("p");
var texto2= document.createTextNode("My best frient is myckey");
p.appendChild(texto2);
var pExistente = document.querySelector("div p");

pExistente.insertAdjacentElement("afterbegin",p);