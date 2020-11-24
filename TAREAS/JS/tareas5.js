function EventListener(){
    document.getElementById("boton").addEventListener("click", multiplo3());
}

function multiplo3(){

    var listado = document.getElementById("listado");
    listado.innerText = "";

    for(var x=50; x>=5; x--){
       if(x % 3 == 0){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        listado.appendChild(lista);
       }
   }

}