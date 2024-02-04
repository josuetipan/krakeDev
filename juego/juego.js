let puntosUsuario = 0;
let puntosComputador = 0;
jugar=function(seleccionado){
    let  ganador = generarElemento();
    generarRuta(ganador);
    let puntos= determinarGanador(seleccionado,ganador);
    
}
limpiar=function(){
    mostrarTexto("puntos","")
    mostrarTexto("puntosCompu","")
    mostrarTexto("ganador1","")
    mostrarImagen("lblImagenComputador","")
    mostrarTexto("ganador"," ")
}