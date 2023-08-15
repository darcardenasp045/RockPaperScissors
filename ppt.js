

    var tjra_btn = document.getElementById("tijera");
    var papl_btn = document.getElementById("papel");
    var pedra_btn = document.getElementById("piedra");
    var ganaste = document.getElementById("ganaste");
    var perdiste = document.getElementById("perdiste");
    var puntaje = document.querySelector(".puntaje");
    var puntaje2 = document.querySelector(".puntaje2");
    var opciones = ["piedra", "papel", "tijera"];
    var maquina; 
    var usuario;
    var con = 0;
    var con2 = 0;
    
    
    function juego(usuario){

        var maquina = opciones[Math.floor(Math.random()*3)];
        
    
        if( usuario===maquina ){
            
            alert("Empatados \nLa Maquina Saco " + maquina);
        }
        else if(maquina == "tijera" && usuario == "piedra"){
            con++;
            ganaste.innerHTML =  "Usuario" +"<br/>" + con +"<br/>";
            
            alert("Ganaste \nLa Maquina Saco " + maquina);
        }
        else if(maquina == "papel" && usuario == "tijera"){
            con++;
            ganaste.innerHTML =  "Usuario" +"<br/>" + con +"<br/>";
            
            alert("Ganaste \nLa Maquina Saco " + maquina);
        }
        else if(maquina == "piedra" && usuario == "papel"){
            con++;
            ganaste.innerHTML =  "Usuario" +"<br/>" + con +"<br/>";
            
            alert("Ganaste \nLa Maquina Saco " + maquina);
        }
        else{
            con2++;
            perdiste.innerHTML =  "Maquina" +"<br/>" + con2 +"<br/>";
            
            alert("Perdiste \nLa Maquina Saco " + maquina);
        }
    }
    
    tjra_btn.addEventListener("click", function(){
        juego("tijera")
    }
    );
    papl_btn.addEventListener("click", function(){
        juego("papel")
    }
    );
    pedra_btn.addEventListener("click", function(){
        juego("piedra")
    }
    );
