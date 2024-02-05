ejecutarCadena = function(){
    let mensaje;
    mensaje = recuperarTexto("lblCadena");
    recorrerCaneda(mensaje);

}

recorrerCaneda=function(cadena){
    //0123
    //juan
    let caracter;
    
    for(let posicion = 0;posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("caraceter "+caracter+" posisicon "+posicion);
    }
}
ejecutar2 = function(){
    let mensaje;
    mensaje = recuperarTexto("lblCadena");
    invertirCadena(mensaje);
}
invertirCadena = function(cadena){
    let caraceter;
    let resultado = "";
    for(let posicion=cadena.length-1;posicion>=0;posicion--){
        caraceter = cadena.charAt(posicion);
        resultado = resultado + caraceter
        mostrarTexto("lblResultado",resultado)
        console.log("caraceter "+caraceter+" posisicon "+posicion);
    }
    
    
}

