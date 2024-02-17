
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