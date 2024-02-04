obtenerAleatorio = function(){//compu
    let aleatorio;
    let numeroJuego;
    let numeroEntero;
    aleatorio=Math.random();//entre 0 y 1
    let valorJuego;
    numeroJuego=aleatorio*3

    numeroEntero=parseInt(numeroJuego);

    valorJuego=numeroEntero+1;

    return valorJuego;
   
}
generarElemento = function(){//compu
    if (obtenerAleatorio() ==1){
        return "piedra"
    }else if(obtenerAleatorio()==2){
        return "papel"
    }else if(obtenerAleatorio()==3){
        return "tijera"
    }
}
determinarGanador = function(usuario,maquina){
    if(usuario == maquina){
        mostrarTexto("ganador","Empate")
        return "Empate"
    }else if(
        (usuario =="piedra" && maquina == "tijera")||
        (usuario == "papel" && maquina == "piedra")||
        (usuario == "tijera" && maquina == "papel")
    ){
        mostrarTexto("ganador","Ganaste!!")
        puntosUsuario = puntosUsuario+1
        mostrarTexto("puntos",puntosUsuario);
        if(puntosUsuario==5){
            mostrarTexto("ganador1","HAS GANADO EL JUEGO")
        }
        return "Ganaste!!"
    }else {
        mostrarTexto("ganador","Perdiste!!")
        
        puntosComputador=puntosComputador+1
        mostrarTexto("puntosCompu",puntosComputador);
        if(puntosComputador==5){

            mostrarTexto("ganador1","Hel computador de ha vencido")
        }
        return "Perdiste!!"
        
    }
}
generarRuta = function(nombre){ //compu
    if(nombre==="papel"){
        mostrarImagen("lblImagenComputador","./images/papel.jpg")
    }else if(nombre==="piedra"){

        mostrarImagen("lblImagenComputador","./images/piedra.jpg")
    }else if (nombre==="tijera"){

        mostrarImagen("lblImagenComputador","./images/tijera.jpg")
    }
}