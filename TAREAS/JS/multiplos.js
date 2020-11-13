function EventListener(){
    document.getElementById("calcular").addEventListener("click" ,multiplo());
}

function multiplo(){
    var elm1 = Number(document.getElementById("uno").value);
    var elm2 = Number(document.getElementById("dos").value);
    var imprimirmult = document.getElementById("alerta");

    if(elm1 % elm2 ==0){
        imprimirmult.innerText = "Son multiplos";
    }

    else{
        imprimirmult.innerText = "No son multiplos";
    }
}