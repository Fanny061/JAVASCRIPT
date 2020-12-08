function LocalStorage(){
    //utiliza la palabra reservada localstorage y para guardar la informacion es con setitem("key", "value");
    localStorage.setItem("Nombre", "Fanny Robledo");
    localStorage.setItem("Numero", 4)
    localStorage.setItem("booleano", true)
    localStorage.setItem("Arreglo", [1,2,3,4,5])
    

    var ropa = {
        calzado:"tenis",
        calzado2:"pantuflas",
        calzado3:"chanclas",
        jeans:"pantalon de mezclilla" 
    }

    localStorage.setItem("Objeto", JSON.stringify(ropa));

    // imprimo en consola la clave que yo tengo en el localstorage
    console.log(localStorage.getItem("Nombre"));

    // removeitem
    // del localstorage booro la informacion con la llave Numeroa
    localStorage.removeItem("Numeroa");

    // del localstorage se boora toda la informcion
    localStorage.clear();

    var usuario = {
        nombre: "fanny",
        edad: 19,
        nacionalidad: "Mexicana"
    };

    // guardo el objeto en el local storge, con el formato JSON.stringfy
    // JSON.stringify se utiliza para darle formato al objeto y por guardarloen el localstorage
    localStorage.setItem("Usuario1", JSON.stringify(usuario))

    // JSON.parse - Es un formato  

    console.log(JSON.parse(localStorage.getItem("Usuario1")));


}