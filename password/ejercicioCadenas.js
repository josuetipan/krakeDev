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
buscarLetra = function(cadena,letra){
    let letraIterarda;
    let existeLetra = false;
    for(let i=0;i<cadena.length;i++){
        letraIterarda=cadena.charAt(i);
        if(letraIterarda==letra){
            existeLetra=true;

        }
    }
    if(existeLetra==true){
        return true
    }else{
        return false
    }
}
contrarMayuscula = function(cadena){
    let letra;
    let validar=false;
    for(let i =  0;i<cadena.length;i++){
        letra = cadena.charAt(i);
       if(esMayuscula(letra)){
           console.log(letra);
        validar = true
       }
    }
    return validar
}
contrarDigito = function(cadena){
    let letra;
    let validar=false;
    for(let i =  0;i<cadena.length;i++){
        letra = cadena.charAt(i);
       if(esDigito(letra)){
        validar = true
       }else{
        return validar
       }
    }
    
}
contrarGuion = function(cadena){
    let letra;
    let validar=false;
    for(let i =  0;i<cadena.length;i++){
        letra = cadena.charAt(i);
       if(esGuion(letra)){
        return true
       }else{
        return validar
       }
    }
    
}
