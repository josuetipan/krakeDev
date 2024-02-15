numeroAleatorio=function(){
    let numero;
    let numeroMultiplicado;
    let numeroEntero;
    numero=Math.random();//entre 0 y 1
    let valorAleatorio;
    numeroMultiplicado= numero*100

    numeroEntero=parseInt(numeroMultiplicado);

    valorAleatorio=numeroEntero+1;
    
    return valorAleatorio;
}
generarAleatorios = function(){
    let aleatorio =[];
    let numero = recuperarInt("lblText");
    if(numero>=5 && numero<=20){
        for(let i=0;i<numero;i++){
            console.log(i);
            let interaccion = numeroAleatorio();
            aleatorio.push(interaccion);
        }
        mostrarResultado(aleatorio);
    }
}
mostrarResultado = function(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    let miArreglo;
    for(let i= 0;i<arregloNumeros.length;i++){
        miArreglo = arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miArreglo;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}