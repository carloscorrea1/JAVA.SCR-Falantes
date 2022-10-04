//seleccionar etiquetas html


/*var h1 = document.querySelector("h1");*/
var h1 = document.querySelectorAll("h1");
//acceder a propiedades del elemento/etiqueta

for (let index = 0; index < h1.length; index++) 
{
    h1[index].style.color="green";
    h1[index].style.background="gray";
    
}


