function EventListener(){
    document.getElementById("numedes").addEventListener("click" , numerosdescendientes());
}

function numerosdescendientes(){
    var NumDes = document.getElementById("descendientes");

    NumDes.innerText = "";

    for(var x=15; x >= 5; x--){
        var Des = document.createElement("li")

        Des.setAttribute("class", "list-group-item");
        Des.innerText = x;

        NumDes.appendChild(Des);
    }
}