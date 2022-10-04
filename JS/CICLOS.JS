/*
var ciclos = prompt("digite el numero de veces que se repite el cliclo");
var saltos= prompt("digite salto del ciclo");
var x = 1;
while(x <= parseInt (ciclos)){
    document.write("<p>"+"ciclo "+ x +"</p>");
    x+=parseint(saltos);
}
    var y = parceInt (ciclos);
    while (y >= 1){
        document.write("<p>"+"ciclo"+ y +"</p>");
        y-=parseInt(saltos);


    }*/
var frase = prompt("¿Quieres que no pare el ciclo?");

    var i = 0;
    while(frase!=="si"){
        document.write("<p>"+"ciclo"+ i +"</p>");
        var frase = prompt("¿Quieres que no pare el ciclo?");
        i++;
    }

