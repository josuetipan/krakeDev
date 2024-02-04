esMayuscula = function(caracter,x){
    caracter=caracter.charCodeAt(x)
    if(caracter>=64 && caracter<=90){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter,x){
    caracter=caracter.charCodeAt(x);
    if(caracter>=48 && caracter<=57){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter,x){
    caracter=caracter.charCodeAt(x)
    if(caracter==45){
        return true;
    }else{
        return false;
    }
}