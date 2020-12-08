function EventListener(){
    document.getElementById("click1").addEventListener("click", calcularsuma1());
    document.getElementById("click2").addEventListener("click", sumaparametros());
    document.getElementById("click3").addEventListener("click", sumareturn());
}

function calcularsuma1(){

    var imprsuma = document.getElementById("calculasuma1");
    var num1 = 76; num2 = 100;

    imprsuma.innerText = "La suma de los números es" + " " + (num1 + num2);
}

function sumaparametros(num1, num2){
    var calcularsuma = document.getElementById("calculasuma2");
    num1 = 50, num2 = 65;

    calcularsuma.innerText = "La suma de los números es" + " " + (num1 + num2);
}

function sumareturn(){
    var imprsumreturn = document.getElementById("calculasuma3");
    imprsumreturn.innerText = "La suma de los números es" + " " + FunctionReturn(80,25);
}

function FunctionReturn(nume1, nume2){
    return nume1 + nume2;
}