//EventListener()

function EventListener(){
    document.getElementById("compararedad").addEventListener("click", compararedad());
}

function compararedad(){
    var hermano1 = Number(document.getElementById("hermano1").value);

    var hermano2 = Number(document.getElementById("hermano2").value);

    var imprimirmensaje = document.getElementById("mayor");

    var diferenciaedad = document.getElementById("diferencia");

    var diferencia = 0;

     if(hermano1 > hermano2){
         imprimirmensaje.innerText = "El Hermano 1 es mayor:" +  hermano1;
         diferencia = hermano1-hermano2;
     }
     else if(hermano1 < hermano2) {
        imprimirmensaje.innerText = "El Hermano 2 es mayor:" +  hermano2;
        diferencia = hermano2-hermano1;
    }

    diferenciaedad.innerText = "La diferencia de edad de los hermanos es:" + diferencia;
    
}