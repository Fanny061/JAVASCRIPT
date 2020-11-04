function EventListener(){
    document.getElementById("CalcularEdad").addEventListener("Click", CalcularEdad());
}

function CalcularEdad()
{
    var edad = Number (document.getElementById("Edad").value);
    var ine = Number(document.getElementById("INE").value);
    var ImprimirInformacion = document.getElementById("ImprimirEdad")
    if(edad >= 18 && ine==1){
        ImprimirInformacion.innerText = "La persona es mayor de edad, tiene su ine y puede tomar";
    }else if(edad >=18 && ine==0){
        ImprimirInformacion.innerText = "La persona es mayor de edad, pero como no tiene su INE no puede tomar";
    }else if(edad <18 && ine==0){
        ImprimirInformacion.innerText = "La persona es menor de edad, pero no puede tener INE";
    }
}