calcularPromedioNotas = function(){
    let num1 = recuperarFlotante("lblNota1");
    let num2 = recuperarFlotante("lblNota2");
    let num3 = recuperarFlotante("lblNota3");
    
    let promedio = calcularPromedio(num1,num2,num3);
    promedio=promedio.toFixed(2)
    cambiarTexto("lblResultado",promedio)

    if(promedio>7){
        cambiarImagen("lblImagen","./imagen/exelente.gif")
    }else{
        cambiarImagen("lblImagen","./imagen/fracaso.gif")
    }
}