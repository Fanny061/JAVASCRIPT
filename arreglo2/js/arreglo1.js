function arreglo1(){
    
    var arreglocomida = ["Leche", "Carne", "Yogurth", "Hamburguesa", "Papas"];

    console.log(arreglocomida);
    console.log(arreglocomida.reverse());
    
    arreglocomida.pop();
    console.log(arreglocomida.pop("Hamburguesa", "Papas"));
    console.log(arreglocomida.slice());

    arreglocomida.shift();
    console.log(arreglocomida.shift("Leche", "Carne"));
    console.log(arreglocomida.slice());
}