calcularTasaInteres = function(ingresoAnual){
    ingresoAnual=parseFloat(ingresoAnual)
    if(ingresoAnual<300000){
        let calcularInteres= ingresoAnual*0.16;
        return calcularInteres;
    }else if (ingresoAnual>=300000 && ingresoAnual<500000){
        calcularInteres = ingresoAnual*0.15;
        return calcularInteres;
    }else if (ingresoAnual>=500000 && ingresoAnual<1000000){
        calcularInteres = ingresoAnual*0.15;
        return calcularInteres;
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        calcularInteres = ingresoAnual*0.15;
        return calcularInteres;
    }else if(ingresoAnual>=2000000 ){
        calcularInteres = ingresoAnual*0.15;
        return calcularInteres;
    }
}
calcularCapacidadPago = function(edad,ingresos,egresos){
    edad=parseInt(edad);
    ingresos=parseFloat(ingresos);
    egresos=parseFloat(egresos);
    if(edad>50){
        let resta = egresos - ingresos;
        let cuota = resta * 0.3
        return cuota
    }else if (edad == 50){
        resta = egresos - ingresos;
        cuota = resta*0.4
        return cuota
    }
}
calcularDescuento = function(precio,cantidad){
    precio=parseFloat(precio);
    cantidad=parseInt(cantidad);
    if(cantidad<3){
        return precio;
    }else if(cantidad>=3 && cantidad<=5){
        let cmpDescuento = precio * 2 /100;
        return cmpDescuento;
    }else if(cantidad>=6 && cantidad<=11){
        cmpDescuento = precio * 3 /100;
        return cmpDescuento;
    }else if(cantidad>=12){
        cmpDescuento = precio * 4 /100;
        return cmpDescuento;
    }
}
determinarColesterolLDL=function(niverColesterol){
    niverColesterol=parseFloat(niverColesterol);
    if(niverColesterol<100){
        return "Su nivel de colesterol LDL es óptimo(lo mejor para su salud)"
    }else if(niverColesterol>=100 && niverColesterol<=129){
        return "Su nivel de colesterol LDL es casi óptimo"
    }else if(niverColesterol>=300 && niverColesterol<=159){
        return "Su nivel de colesterol LDL es Limite superior del rango normal"
    }else if(niverColesterol>=160 && niverColesterol<=189){
        return "Su nivel de colesterol LDL es Alto"
    }else if(niverColesterol>=190){
        return "Su nivel de colesterol LDL es Muy alto"
    }
}
validarClave = function(clave){
    clave=clave.length(16);
    if (clave>=8 && clave<=16 ){
        return true;
    }else{
        return false;
    }
}
esMayuscula = function(caracter){
    caracter=caracter.charCodeAt(0)
    if(caracter>=64 && caracter<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    caracter=caracter.charCodeAt(0)
    if(caracter<=97 && caracter<=122){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    caracter=caracter.charCodeAt(0);
    if(caracter>=0 && caracter<=255){
        return true;
    }else{
        return false;
    }
}
darPermiso = function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=parseFloat(notaMatematicas);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if(notaFisica>90 || notaGeometria>90 || notaMatematicas>90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso=function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=parseFloat(notaMatematicas);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if(notaMatematicas>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}
dejarSalir=function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=parseFloat(notaMatematicas);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if(notaMatematicas>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematicas){
        return true;
    }else{
        return false;
    }
}