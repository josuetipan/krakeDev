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

calcularDescuentoPorVolumen= function(subtotal,cantidad){
    let cmpdescuento;
    if(cantidad<3){
        return subtotal;
    }else if(cantidad>=3 & cantidad<=5){
        cmpdescuento=subtotal*0.03;
        return cmpdescuento;
    }else if(cantidad>=6 & cantidad<=11){
        cmpdescuento=subtotal*0.04
        return cmpdescuento;
    }else if(cantidad>=12){
        cmpdescuento=subtotal*0.05
        return cmpdescuento;
    }
}
