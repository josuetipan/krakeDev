calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=(monto*porcentajeDescuento)/100;
    return descuento;
}

calcularIVA=function(monto){
    let iva;
    iva = monto*0.12;
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    let subTotalPagar;
    subTotalPagar= precio*cantidad
    return subTotalPagar
}

calcularTotal=function(subTotal,descuento,iva){
    let totalPagar;
    totalPagar = subTotal -descuento + iva;
    return totalPagar;
}
