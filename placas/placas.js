validarEstructura=function(placa){
    let cmpPlaca=placa.length
    let error="";
    let ctpPlaca=true;
    if(cmpPlaca==7 || cmpPlaca==8){ //longitud
        if(esMayuscula(placa,0)==false){
            error="ERROR 1 caracter en mayuscula -"+error
             mostrarTexto("lblMostrarResultado",error)
             ctpPlaca=false
        }
       if(esMayuscula(placa,1)==false){
        error = "ERROR 2 caracter en mayuscula -"+error
        mostrarTexto("lblMostrarResultado",error)
        ctpPlaca=false
        }
        if(esMayuscula(placa,2)==false){
            error="ERROR 3 caracter en mayuscula -"+error
           mostrarTexto("lblMostrarResultado",error)
           ctpPlaca=false
        }
        if(esGuion(placa,3)==false){
            error="ERROR 4 caracter en mayuscula -"+error
           mostrarTexto("lblMostrarResultado",error)
           ctpPlaca=false
        }
        if(esDigito(placa,4)==false){
            error="ERROR 5 caracter es un digito -"+error
           mostrarTexto("lblMostrarResultado",error)
           ctpPlaca=false
        }
        if(esDigito(placa,5)==false){
            error="ERROR 6 caracter es un digito -"+error
           mostrarTexto("lblMostrarResultado",error)
           ctpPlaca=false
        }
        if(esDigito(placa,6)==false){
            error="ERROR 7 caracter es un digito -"+error
           mostrarTexto("lblMostrarResultado",error)
           ctpPlaca=false
        }
        if(cmpPlaca == 8){
            if(esDigito(placa,7)==false){
                error="ERROR 8 caracter  es un digito -"+error
                mostrarTexto("lblMostrarResultado",error)
                ctpPlaca=false
            }
        }
    }else{
        ctpPlaca=true
    }
    return ctpPlaca;
}

validarPlaca=function(){
    let cmpTetxto;
    cmpTetxto = recuperarTexto("lblPlaca");
    let errorEstrctura = validarEstructura(cmpTetxto);
    
    if(errorEstrctura == true){
        mostrarTexto("lblResultado","EXTRUCTURA VALIDA")
        mostrarTexto("lblMostrarResultado","")
        let provincia=obetenerProvincia(cmpTetxto.charAt(0))
        let tipo=obtenerTipoVehiculo(cmpTetxto.charAt(1));
        let pico=obtenerDiasPicoYPlca(cmpTetxto)
        

    }else{
        mostrarTexto("lblResultado","EXTRUCTURA INCORRECTA")
        mostrarTexto("lblMostrarResultado",error)
        
    }
}
obetenerProvincia=function(placa){
    if(placa=="A"){
        mostrarTexto("lblProvincia","Azuay")
    }else if(placa=="B"){
        mostrarTexto("lblProvincia","Bolivar")
        
    }else if(placa=="U"){
        mostrarTexto("lblProvincia","Cañar")

    }else if(placa=="C"){
        mostrarTexto("lblProvincia","Carchi")

    }else if(placa=="X"){
        mostrarTexto("lblProvincia","Cotopaxi")
        
    }else if(placa=="H"){
        mostrarTexto("lblProvincia","Chimborazo")
        
    }else if(placa=="O"){
        mostrarTexto("lblProvincia","El Oro")

    }else if(placa=="E"){
        mostrarTexto("lblProvincia","Esmeraldas")
        
    }else if(placa=="W"){
        mostrarTexto("lblProvincia","Galápagos")
        
    }else if(placa=="G"){
        mostrarTexto("lblProvincia","Guayas")
        
    }else if(placa=="I"){
        mostrarTexto("lblProvincia","Imbabura")
        
    }else if(placa=="L"){
        mostrarTexto("lblProvincia","Loja")
        
    }else if(placa=="R"){
        mostrarTexto("lblProvincia","Los Ríos")
        
    }else if(placa=="M"){
        mostrarTexto("lblProvincia","Manabí")
        
    }else if(placa=="V"){
        mostrarTexto("lblProvincia","Morona Santiago")
        
    }else if(placa=="N"){
        mostrarTexto("lblProvincia","Napo")
        
    }else if(placa=="S"){
        mostrarTexto("lblProvincia","Pastaza")
        
    }else if(placa=="P"){
        mostrarTexto("lblProvincia","Pichincha")
        
    }else if(placa=="K"){
        mostrarTexto("lblProvincia","Sucumbíos")
        
    }else if(placa=="Q"){
        mostrarTexto("lblProvincia","Orellana")
        
    }else if(placa=="T"){
        mostrarTexto("lblProvincia","Tungurahua")
        
    }else if(placa=="Z"){
        mostrarTexto("lblProvincia","Zamora Chinchipe")
        
    }else if(placa=="Y"){
        mostrarTexto("lblProvincia","Santa Elena")
        
    }else{
        mostrarTexto("lblProvincia","provincia incorrecta")
    }
}   
limpiar=function(){
    mostrarTexto("lblPlaca","");
    mostrarTexto("lblResultado","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipo","");
    mostrarTexto("lblPico","");
    mostrarTexto("lblMostrarResultado","");
}