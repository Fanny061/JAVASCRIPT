function EventListener(){
    document.getElementById("click1").addEventListener("click", calcularmultiplicacion());
    document.getElementById("click2").addEventListener("click", mulparametros());
    document.getElementById("click3").addEventListener("click", mulreturn());
}

function calcularmultiplicacion(){

    var imprmul = document.getElementById("calculamul1");
    var num1 = 150; num2 = 35;

    imprmul.innerText = "El resultado de la multiplicación es" + " " + (num1 * num2);
}

function mulparametros(num1, num2){
    var calcularmul = document.getElementById("calculamul2");
    num1 = 20, num2 = 25;

    calcularmul.innerText = "El resultado de la multiplicación es" + " " + (num1 * num2);
}

function mulreturn(){
    var imprmulreturn = document.getElementById("calculamul3");
    imprmulreturn.innerText = "El resultado de la multiplicación es" + " " + FunctionReturn(10,7);
}

function FunctionReturn(nume1, nume2){
    return nume1 * nume2;
}