function EventListener(){
    document.getElementById("costototal").addEventListener("click" , calcularcostos())
}

function calcularcostos(){
    var pres = Number(document.getElementById("presupuesto").value);
    var cost1 = Number(document.getElementById("costo1").value);
    var cost2 = Number(document.getElementById("costo2").value);
    var cost3 = Number(document.getElementById("costo3").value);
    var cost4 = Number(document.getElementById("costo4").value);
    var imprsum = (document.getElementById("suma"));
    var imprres = (document.getElementById("resultado"));
    var sumatotal = cost1 + cost2 + cost3 + cost4


    if(sumatotal <= pres){
        imprsum.innerText = "La suma total de los precios es de:" + " " + sumatotal;
        imprres.innerText = "Le alcanza el presupuesto";
    }

    else{
        imprsum.innerText = "La suma total de los precios es de:" + " " + sumatotal;
        imprres.innerText =  "No alcanzó su presupuesto";
    }

}