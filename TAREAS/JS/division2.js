function EventListener(){
    document.getElementById("click1").addEventListener("click", calculardivisión());
    document.getElementById("click2").addEventListener("click", divparametros());
    document.getElementById("click3").addEventListener("click", divreturn());
}

function calculardivisión(){

    var imprdiv = document.getElementById("calculadiv1");
    var num1 = 140; num2 = 35;

    imprdiv.innerText = "El resultado de la división es" + " " + (num1 / num2);
}

function divparametros(num1, num2){
    var calculadiv = document.getElementById("calculadiv2");
    num1 = 100, num2 = 25;

    calculadiv.innerText = "El resultado de la división es" + " " + (num1 / num2);
}

function divreturn(){
    var imprdivreturn = document.getElementById("calculadiv3");
    imprdivreturn.innerText = "El resultado de la división es" + " " + FunctionReturn(132,7);
}

function FunctionReturn(nume1, nume2){
    return nume1 / nume2;
}