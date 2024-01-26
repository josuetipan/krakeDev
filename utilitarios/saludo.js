
saludar=function(){
    let recu;
    recu=recuperarTexto("txtNombre");
    let ape;
    ape=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenidO ="Bienvenido "+recu+" "+ape;
    mostarTexto("idResultado",mensajeBienvenidO);

    mostarImagen("imgSaludo", "./imageness/anime-gif-6.gif");
    mostarTextoEnCaja("txtNombre"," ")
}
