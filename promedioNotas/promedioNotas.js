calcularPromedioNotas = function(){
    let num1 = recuperarFlotante("lblNota1");
    let num2 = recuperarFlotante("lblNota2");
    let num3 = recuperarFlotante("lblNota3");
    
    let promedio = calcularPromedio(num1,num2,num3);
    promedio=promedio.toFixed(2)
    cambiarTexto("lblResultado",promedio)

    if(promedio<5 && promedio>0){
        cambiarTexto("lblMuestra","Reprobado")
        cambiarImagen("lblImagen","./imagen/fracaso.gif")
    }else if(promedio>5 && promedio<8){
        cambiarTexto("lblMuestra","Buen Trabajo")
        cambiarImagen("lblImagen","./imagen/buentrabajo.gif")
    }else if(promedio>8 && promedio<=10){
        cambiarTexto("lblMuestra","Exelente")
        cambiarImagen("lblImagen","./imagen/exelente.gif")
    }else{
        cambiarTexto("lblMuestra","Datos Incorrectos")
        cambiarImagen("lblImagen","./imagen/error.gif")
    }
}