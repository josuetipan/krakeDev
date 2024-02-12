let palabraSecreta = "";
let letrasEncontradas = 0;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
esMayuscula = function(caracter){
    let mayuscula;
    mayuscula= caracter.charCodeAt()
    if(mayuscula>=64 && mayuscula<=90){
        return true;
    }else{
        return false;
    }
}
guardarPalabra = function(){
    let texto = recuperarTexto("txtSecreta");
    if(texto.length==5 && esMayuscula(texto) == true){
        palabraSecreta = texto;
    }else{
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
}
mostrarLetra = function(posicion,letra){
    posicion = "div" + posicion;
    mostrarTexto(posicion,letra)
}
validar = function(letra){
    let caracter;
    let encontro = false;
    for(i = 0;i<palabraSecreta.length;i++){
        caracter = palabraSecreta.charAt(i);
        if(letra == caracter){
            mostrarLetra(i,letra);
            letrasEncontradas++;
            encontro = true;
            coincidencias++;
        }
    }
    if(encontro == false){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado()
    }
}
ingresarLetra = function(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra) == true){
        validar(letra);
        if(coincidencias == 5){
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }else if(errores ==10){
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        intentos++;
    }
}
mostrarAhorcado = function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores ==2){
        
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }else if(errores == 3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
        
    }else if(errores == 4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
        
    }else if(errores == 5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
        
    }else if(errores == 6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
        
    }else if(errores == 7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
        
    }else if(errores == 8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
        
    }else if(errores == 9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");

    }
}