function arreglos(){

    var arreglo1 = ["EJERCICIO 1"];
    console.log(arreglo1);


    var semana = ["Martes","Miércoles","Jueves","Viernes","sábado"];
    console.log(semana);
    //Agregar información al final
    console.log(semana.push("Domingo"));
    console.log(semana.slice());
    //Agregar información al principio
    console.log(semana.unshift("Lunes"));
    console.log(semana.slice());


    var arreglo2 = ["EJERCICIO 2"];
    console.log(arreglo2);


    var nombrepersonas = ["Jyn","Laura","Katy","Jorge"];
    console.log(nombrepersonas);
    console.log(nombrepersonas.push("Alex","Dani","Omar"));
    console.log(nombrepersonas.slice());

    console.log(nombrepersonas.unshift("Deysi","Luis","Carlos"));
    console.log(nombrepersonas.slice());

}