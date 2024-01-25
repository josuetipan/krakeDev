recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente)
    valorIngresado=componente.value;
    return valorIngresado
}
saludar=function(){
    let recu;
    recu=recuperarTexto("txtNombre")
    let ape;
    ape=recuperarTexto("txtApellido")
}