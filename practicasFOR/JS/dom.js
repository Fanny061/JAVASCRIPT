function EventListener(){
    document.getElementById("click1").addEventListener("click", Darleclick1());
    document.getElementById("click2").addEventListener("click", Darleclick2());
    document.getElementById("click3").addEventListener("click", Darleclick3());
}

function Darleclick1(){

    var salida1 = document.getElementById("salida1");
//document.createElement se utiliza para crear una etiquta desde javascript
    var button = document.createElement("button");
    //La instruccion ser attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class", "btn btn-primary btn-lg btn-block");
    // se utiliza para imprimir informacion en la etiqueta(boton);
    button.setAttribute("id", "boton"); // = id = "Boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.innerText = "Boton Impreso";

    salida1.appendChild(button);
}

function Darleclick2(){
    var salida2 = document.getElementById("salida2");

    //inicializar una variable con un 0, imprimir 5 veces un boton, x++ es un contador
    for(var x=0; x < 5; x++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg btn-blck mt-2");
    button.setAttribute("id", "button");
    button.setAttribute("type", "button");
    button.innerText= "Boton Impreso";
    salida2.appendChild(button);
    }
}

function Darleclick3(){
    var listado = document.getElementById("listado");

    for(var x=0; x < 5; x++){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        salida3.appendChild(lista);
    }
}