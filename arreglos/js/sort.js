function EventListener(){
    document.getElementById("boton").addEventListener("click", arreglos());
}


function arreglos(){
    var Arreglo1 = ["Moto", "soto", "Abaco", "abeja", "Sapo", "nieve", "Zumba", "barco"];

    var Arreglo2 = ["bicicleta", "silla", "cama", "computadora", "celular", "viento", "salmon", "pared"];

    var imprnormal = document.getElementById("normal");
    var imprordenado = document.getElementById("ordenado");

    
    var normal = document.getElementById("normal2");
    var ordenado= document.getElementById("original2");

    //imprime las palabras en el orden original
    imprnormal.innerText = "Arreglo:" + " " + Arreglo1;
    //imprime las palabras en orden alfabetico, o por mayusculas y minusculas
    imprordenado.innerText = "Arreglo ordenado:" + " " +Arreglo1.sort();

    normal.innerText = "Arreglo:"+" "+ Arreglo2;
    ordenado.innerText = "Arreglo ordenado:" + " " +Arreglo2.sort();
}