function Submit2(){

    var Nombres = String(document.getElementById("Nombres").value);
    var Email = String(document.getElementById("correo2").value);
    var comentarios = String(document.getElementById("comentarios").value);

    if(Nombres != "" && Email != "" && comentarios != ""){
   
        localStorage.setItem("Nombres", Nombres);
        localStorage.setItem("Email", Email);
        localStorage.setItem("comentarios", comentarios);
    }
    Nombres.innerText="";
}

//function Submit(){
    //var Email = String(document.getElementById("correo").value);

    //if(Email != ""){
      //  localStorage.setItem("Email", Email);
  //  }

//}
///////////////////////////////////////////////////////////////////////////////////////////////////////////sesion

function Submit(){

    var email = String(document.getElementById("datos1").value);
    var contraseña = String(document.getElementById("contraseña").value);

    email.innerText="";
    contraseña.innerText="";

    if(email != "" && contraseña != ""){
   
        localStorage.setItem("datos1", email);
        localStorage.setItem("contraseña", contraseña);
    }
    
}

