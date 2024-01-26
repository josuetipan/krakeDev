recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente)
    valorIngresado=componente.value;
    return valorIngresado
}
saludar=function(){
    let recu;
    recu=recuperarTexto("txtNombre");
    let ape;
    ape=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenidO ="Bienvenido "+recu+" "+ape;
    mostarTexto("idResultado",mensajeBienvenidO);
}
recuperarInt=function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero
}

recuperarFloat=function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante
}
mostarTexto=function(idComponente,mensaje) {
    let valorCaja =  document.getElementById(idComponente);
    valorCaja.innerText=mensaje
}