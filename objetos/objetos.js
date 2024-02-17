
probarAtributo = function(){
    let persona = {
        nombre : "JOSUE",
        apellido : "TIPAN",
        edad : 17,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("No esta vivo");
    }else{
        
        console.log("Esta vivo");
    }
}
crearProducto = function(){
    let producto1 = {
        nombre : "libro",
        precio : 5.50,
        stock : 10,

    }
    let producto2 = {
        nombre : "telefonos",
        precio : 200.00,
        stock : 50,
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock");
    }else if(producto1.stock==producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }   
}
modificarAtriutos = function(){
    let cuenta = {
        numero : "5323423423",
        saldo : 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente = function(){
    let cliente = {
        cedula : "1754772778",
        nombre : "Josue"
    }
    let cliente1 = {

    }
    cliente1.nombre = "Romero";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "1754772778";
}
probarIncrementoSaldo = function(){
    let cta = {numero : "234234",saldo: 34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probaraDeterminarMayor = function(){
    let per1={nombre:"daniel",edad:45};
    let per2={nombre:"luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor != null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor = function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}