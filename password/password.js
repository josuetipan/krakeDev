validarPassword = function(password){
    if(password.length<8 && password.length>16){
        return false
    }
    let letra;
    let ascci;
    let letraValida = false;
    for(let i = 0;i<password.length;i++){
        letra = password.charAt(i);
        ascci=password.charCodeAt(i)
        if(ascci>64 && ascci<=90){
            letraValida=true;
            
        }
            
    }
    if(!letraValida){
        mostrarTexto("erores","debe contener una letra Mayuscula")
        return false
    }

    let digito,ascci1,digitoValido = false;
    for(let i=0;i<password.length;i++){
        digito = password.charAt(i);
        ascci1 = password.charCodeAt(i);
        if (ascci1>=48 && ascci1<=57){
            digitoValido = true;
            
        }
    }
    if(!digitoValido){
        mostrarTexto("erores","debe contener un digito")
        return false
    }
    
    let caracter,ascci2,caraceterValido=false;
    for(i=0;i<password.length;i++){
        caracter=password.charAt(i);
        ascci2=password.charCodeAt(i);
        if(ascci2==45 || ascci2==95 || ascci2==42){
            caraceterValido = true;
        }
    }
    if(!caraceterValido){
        mostrarTexto("erores","debe contener un caracter especial (*-_)")
        return false;
    }
    return true
}
ejecutarValidacion=function(){
    let caja = recuperarTexto("lblText")
    let contraseña = validarPassword(caja);
    if(contraseña == true){
        mostrarTexto("erores"," ");
        mostrarTexto("erores1","password correcto");
        
    }else{
        
        mostrarTexto("erores1","password incorrecto");
    }
}