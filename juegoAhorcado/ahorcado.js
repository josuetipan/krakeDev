let palabraSecreta = "";
let letrasEncontradas = 0;
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
    posicion = "div" + posicion
    mostrarTexto(posicion,letra)
}
validar = function(letra){
    let caracter;
    for(i = 0;i<palabraSecreta.length;i++){
        caracter = palabraSecreta.charAt(i);
        if(letra == caracter){
            mostrarLetra(i,letra);
            letrasEncontradas++;
        }
    }
}
ingresarLetra = function(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra) == true){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}