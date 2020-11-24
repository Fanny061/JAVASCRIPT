function EventListener(){
    document.getElementById("ciclo1-16").addEventListener("click", imprciclo());
}

function imprciclo(){
    var imprnum = document.getElementById("listado");
    imprnum.innerText = "";

    for(var x=1; x<=16; x+=3){
        var lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item mt-2");
        lista.innerText = x;
        imprnum.appendChild(lista);
    }
} 