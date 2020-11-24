function EventListener(){
    document.getElementById("boton").addEventListener("click",dia());
}

function dia(){
    var dia = document.getElementById("dia").value;
    var imprimir = document.getElementById("imprimir");
    
    if(dia == "lunes"){
        imprimir.innerText = "El Lunes toca ir al super"
    }else if(dia == "viernes"){
        imprimir.innerText = "El viernes toca sacar al perro a pasear"
    }else if(dia == "sabado" || dia == "domingo"){
        imprimir.innerText = "Buen fin de semana"
    }else{
        imprimir.innerText = "No se encontró nada"
    }


}