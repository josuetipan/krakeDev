esMayuscula = function(caracter){
    caracter=caracter.charCodeAt()
    if(caracter>=64 && caracter<=90){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    caracter=caracter.charCodeAt();
    if(caracter>=48 && caracter<=57){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter){
    caracter=caracter.charCodeAt()
    if(caracter==45 || caracter==95 || caracter==42){
        return true;
    }else{
        return false;
    }
}
esCaractes=function(caracter){
    caracter=caracter.charCodeAt()
    if(caracter==45){
        return true;
    }else{
        return false;
    }
}