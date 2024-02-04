obtenerTipoVehiculo=function(placa){
    if(placa=="A" || placa=="Z"){
        mostrarTexto("lblTipo","Vehiculos comerciales")
    }else if(placa=="E"){
        mostrarTexto("lblTipo","Vehiculos gubernamentales")
    }else if(placa=="X"){
        mostrarTexto("lblTipo","Vehiculos de uso oficial")
    }else if(placa=="S"){
        mostrarTexto("lblTipo","Vehiculos del gobierno provincial")
    }else if(placa=="M"){
        mostrarTexto("lblTipo","Vehiculos municipales")
    }else if(placa !="A","Z","E","X","S","M"){
        mostrarTexto("lblTipo","Vehiculos perticulares (privado)")
    }else{
        return null
    }
}
obtenerDiasPicoYPlca=function(placa){
    let x=placa.length
    x=x-1
    let cmpPlaca=placa.charAt(x)
    if(x==7 || x==6){
        if(cmpPlaca=="1" || cmpPlaca=="2"){
            mostrarTexto("lblPico","Lunes")
        }else if(cmpPlaca=="3" || cmpPlaca=="4"){
            mostrarTexto("lblPico", "Martes")
            
        }else if(cmpPlaca=="5" || cmpPlaca=="6"){
            mostrarTexto("lblPico", "Miercoles")
            
        }else if(cmpPlaca=="7" || cmpPlaca=="8"){
            mostrarTexto("lblPico", "Jueves")
            
        }else if(cmpPlaca=="9" || cmpPlaca=="0"){
            mostrarTexto("lblPico","Viernes")
            
        }
    }
}