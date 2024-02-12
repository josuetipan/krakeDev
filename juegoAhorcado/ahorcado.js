let palabraSecreta = "";
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