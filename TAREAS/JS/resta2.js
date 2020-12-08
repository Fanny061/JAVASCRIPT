function EventListener(){
    document.getElementById("click1").addEventListener("click", calcularresta1());
    document.getElementById("click2").addEventListener("click", restaparametros());
    document.getElementById("click3").addEventListener("click", restareturn());
}

function calcularresta1(){

    var imprresta = document.getElementById("calcularesta1");
    var num1 = 100; num2 = 45;

    imprresta.innerText = "El restante es" + " " + (num1 - num2);
}

function restaparametros(num1, num2){
    var calcularesta = document.getElementById("calcularesta2");
    num1 = 60, num2 = 25;

    calcularesta.innerText = "El restante es" + " " + (num1 - num2);
}

function restareturn(){
    var impresreturn = document.getElementById("calcularesta3");
    impresreturn.innerText = "El restante es" + " " + FunctionReturn(250,37);
}

function FunctionReturn(nume1, nume2){
    return nume1 - nume2;
}