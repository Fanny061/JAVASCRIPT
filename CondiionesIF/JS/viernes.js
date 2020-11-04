function EvenListener(){
    document.getElementById("calculardias").addEventListener("click" , calculodedias())
}
function calculodedias(){

    var días = Number(document.getElementById("días").value);
    var imprimirdiasdelasemana = document.getElementById("imprimirdiasdelasemana");

    if(días == 1){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es el domingo"
    }

    if(días == 2){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es Lunes"
    }

    if(días == 3){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es Martes"
    }

    if(días == 4){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es Miercoles"
    }

    if(días == 5){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es Jueves"
    }

    if(días == 6){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es Viernes"
    }

    if(días == 7){
        imprimirdiasdelasemana.innerText = "El día que ingresaste es sábado"
    }
}