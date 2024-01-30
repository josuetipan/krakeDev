let puntos= 0;
let lanzamiento = 5; 


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado)
    
}

modificarPuntos = function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos)
    if (lanzamiento==1)
    if(puntos>20){
        cambiarTexto("resultado","GANASTE")
    }else{
        cambiarTexto("resultado","PERDISTE")
    }
    if(lanzamiento==0){
        limpiar()
    }
    modificarLanzamientos()
}
modificarLanzamientos = function(){
    lanzamiento=lanzamiento-1
    cambiarTexto("lblLanzamientos",lanzamiento)
    if (lanzamiento == 0){
        cambiarTexto("lblLanzamientos","Game over")
    }
    
    
}
limpiar=function(){
    puntos=0
    lanzamiento = 6
    cambiarTexto("lblPuntos",puntos)
    cambiarTexto("lblLanzamientos",lanzamiento)
    cambiarTexto("resultado","")
    cambiarImagen("lblImagen","")
}

mostrarCara = function(numero){
    if(numero == 1){
        cambiarImagen("lblImagen","dados1.png");
    }else if(numero == 2){
        cambiarImagen("lblImagen","dados2.png");
    }else if(numero == 3){
        cambiarImagen("lblImagen","dados3.png");
    }else if(numero == 4){
        cambiarImagen("lblImagen","dados4.png");
    }else if(numero == 5){
        cambiarImagen("lblImagen","dados5.png");
    }else if(numero == 6){
        cambiarImagen("lblImagen","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}