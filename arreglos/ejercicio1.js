let notas =[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo = function(){
    let notaR;
    for(let indice = 0;indice<notas.length;indice++){
        notaR = notas[indice];
        console.log(notaR);
    }
}

probaraAgregar = function(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota= function(nota){
    notas.push(nota);
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio ;
    for(let i =0;i<notas.length;i++){
        let total = notas[i];
        sumaNotas =total+sumaNotas;
    }
    promedio = sumaNotas/notas.length;
    return promedio.toFixed(2)
}
ejecutarPromedio = function(){
    let resultado = calcularPromedio();
    mostrarTexto("lblResultado",resultado)
}