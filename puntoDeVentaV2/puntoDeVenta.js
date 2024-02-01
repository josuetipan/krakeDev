calcularValorTotal = function(){
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para recuperar los valores de las cajas de texto
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto")
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio")
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad")
    //4. Recuperar el porcentaje de descuento como int
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    if( esProductoValido(nombreProducto,"lblError1") & esCantidadValida(cantidad,"lblError2") & esPrecioValido(precioProducto,"lblError3")){
        valorSubtotal=calcularSubtotal(precioProducto,cantidad)
        mostrarTexto("lblSubtotal",valorSubtotal.toFixed(2))
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad)
        mostrarTexto("lblDescuento",valorDescuento.toFixed(2));
        let x= (valorSubtotal-valorDescuento)*0.12
        valorIVA=calcularIVA(x)
        mostrarTexto("lblValorIVA",valorIVA.toFixed(2) )   
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
        mostrarTexto("lblTotal",valorTotal.toFixed(2) )   
        
    }else{
        mostrarTexto("lblSubtotal","0.0")
        mostrarTexto("lblDescuento","0.0")
        mostrarTexto("lblValorIVA","0.0")
        mostrarTexto("lblTotal","0.0")
        
    }


}   
limpiar=function(){
    mostrarTextoEnCaja("txtProducto"," ")
    mostrarTextoEnCaja("txtPrecio"," ")
    mostrarTextoEnCaja("txtCantidad"," ")
    mostrarTexto("lblSubtotal","0.0")
    mostrarTexto("lblDescuento","0.0")
    mostrarTexto("lblValorIVA","0.0")
    mostrarTexto("lblTotal","0.0")

}










esProductoValido=function (producto,idComponenteError){
    if(!producto){
        mostrarTexto(idComponenteError,"*OBLIGATORIO")
        return false;
    }else if(producto.length>10){
        mostrarTexto(idComponenteError,"nombre del producto no pude tener mas de 10 caracteres");
        return false;
    }else{
        mostrarTexto(idComponenteError,"");
        return true;
    }
}
esCantidadValida=function(cantidad,idComponenteError){
    if(!cantidad){
        mostrarTexto(idComponenteError,"*OBLIGATORIO")
        return false;
    }else if(cantidad<0 || cantidad>100 || isNaN(cantidad)){
        mostrarTexto(idComponenteError,"numero entre 0 y 100");
        return false;
    }else{
        mostrarTexto(idComponenteError,"");
        return true;
    }
}

esPrecioValido=function(precio,idComponenteError){
    if(!precio){
        mostrarTexto(idComponenteError,"*OBLIGATORIO")
        return false;
    }else if(precio<0 || precio>50 || isNaN(precio)){
        mostrarTexto(idComponenteError,"número entre 0 y 50");
        return false;
    }else{
        mostrarTexto(idComponenteError,"");
        return true;
    }
}