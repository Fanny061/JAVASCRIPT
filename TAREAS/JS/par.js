function EventListener(){
    document.getElementById("BTcalcular").addEventListener("click" , calculapar());
}
//TIENE QUE COINCIDIR LA FUNCION CON LA COMPARACION 
function calculapar(){
    var num = Number(document.getElementById("num1").value);
    var imprimir = document.getElementById("imprimir");

    if(num % 2 ==0){
        imprimir.innerText = "PAR";
    }

    else{
        imprimir.innerText = "IMPAR";
    }
}