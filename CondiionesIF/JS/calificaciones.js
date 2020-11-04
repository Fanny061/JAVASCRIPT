function EventListener(){
    //instruccion solo de boton de html y esta atento cuando le damos click a calcular
    document.getElementById("calificacion").addEventListener("click" , calificacion())
}

function calificaciones(){
    var Calificacion1 = Number(document.getElementById("calificacion1").value);
    var Calificacion2 = Number(document.getElementById("calificacion2").value);
    var Calificacion3 = Number(document.getElementById("calificacion3").value);
    var Calificacion4 = Number(document.getElementById("calificacion4").value);

    var valorminimo = 0;
    var promedio = 0;

//math es matematicas y min es minimo y juntos son para obtener el valor minimo de una serie de numeros 
if(calificacion1 < calificacion2 && calificacion1 < calificacion3 && calificacion1 < calificacion4){
    valorminimo = Match.min(calificacion1, calificacion2, calificacion3, calificacion4);
    promedio = (calificacion2 + calificacion3 + calificacion4) / 3;
    NumeroMinimo.innerText = "La calificacion minima es:" + " " + valorminimo;
    promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(calificacion2 < calificacion1 && calificacion2 < calificacion3 && calificacion2 < calificacion4){
    valorminimo = Match.min(calificacion1, calificacion2, calificacion3, calificacion4);
    promedio = (calificacion2 + calificacion3 + calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + valorminimo;
    promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(calificacion3 < calificacion1 && calificacion3 < calificacion2 && calificacion3 < calificacion4){
    valorminimo = Match.min(calificacion1, calificacion2, calificacion3, calificacion4);
    promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + valorminimo;
    promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}
if(calificacion4 < calificacion1 && calificacion4 < calificacion3 && calificacion4 < calificacion3){
    valorminimo = Match.min(calificacion1, calificacion2, calificacion3, calificacion4);
    promedio = (calificacion2 + calificacion3 + calificacion4) / 3;
    NumeroMinimo.innerText = "La Calificacion minima es:" + " " + valorminimo;
    promedio.innerText = "El promedio de las notas mas altas son:" + " " + promedio;
}    
}