function Objetos(){

    //se esta creando un objeto llamdo coches, y dentro de las llaves estan sus propiedades
    var coche = {
        //propiedad son la caracteristicas comunes de un objeto
        puertas:2,
        ruedas:4, 
        color:"azul", 
        anio:2010
    }; //indico que ya termine de crear el objeto

    var coche2 = {
        puertas:4,
        ruedas:4,
        color:"rojo",
        anio:2020
    };

    var coche3 = {
        puertas:4,
        ruedas:4,
        color:"verde",
        anio:2015
    };

    var coche4 = {
        puertas:2,
        ruedas:4,
        color:"negro",
        anio:2018
    };

    var Fabricantes = {
        marca1: "Ford",
        marca2: "Nissan",
        marca3: "Ram",
        marca4: "Silverado", 

    };
    //creando el objeto coche, con sus caracteristicas del mismo
    var Ford = {
        //creo una propiedad puertas, despues mando a llamar al objeto coche y selecciona la informacion 
        puertas: coche.puertas,
        ruedas: coche.ruedas,
        color: coche.color,
        anio:  coche.anio
    };

    var Nissan = {
        puertas: coche2.puertas,
        ruedas:  coche2.ruedas,
        color:  coche2.color,
        anio:  coche2.anio
    };

    var Ram = {
        puertas: coche3.puertas,
        ruedas: coche3.ruedas,
        color: coche3.color,
        anio: coche3.anio
    };

    var Silverado = {
        puertas: coche4.puertas,
        ruedas: coche4.ruedas,
        color: coche4.color,
        anio: coche4.anio
    };
    console.log(Ford);
    console.log(Nissan);
    console.log(Ram);
    console.log(Silverado);
}