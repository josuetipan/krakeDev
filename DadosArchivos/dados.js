jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado()
    cambiarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
        console.log("es mayor a tres");
        console.log("Gnaste");
    }else{
        console.log("Es menor a tre");
        console.log("Perdiste");
    }
}
//crear una funcion llamada lanzar dado
//no va a recibir paramentro
//returna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    aleatorio=Math.random();//entre 0 y 1
    let valorDado;
    numeroMultiplicado=aleatorio*6

    numeroEntero=parseInt(numeroMultiplicado);

    valorDado=numeroEntero+1;
    return valorDado;
   
}