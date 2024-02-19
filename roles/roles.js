let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]
let esNUevo = false;
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleado = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let tabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>"
    let elementosTabla;
    for (i = 0; i < empleados.length; i++) {
        elementosTabla = empleados[i];
        tabla +=
            "<tr><td>" + elementosTabla.cedula + "</td>" +
            "<td>" + elementosTabla.nombre + "</td>" +
            "<td>" + elementosTabla.apellido + "</td>" +
            "<td>" + elementosTabla.sueldo + "</td>" +
            "</tr>"
    }
    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNUevo = true;
}

buscarEmpleado = function (cedula) {
    let elementosEmpleado;
    let elementoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementosEmpleado = empleados[i];
        if (elementosEmpleado.cedula == cedula) {
            elementoEncontrado = elementosEmpleado;
            break
        }
    }
    return elementoEncontrado;
}
agregarEmpleado = function (empleado) {
    let resultadoEmpleo;
    resultadoEmpleo = buscarEmpleado(empleado.cedula)
    if (resultadoEmpleo == null) {
        empleados.push(empleado);
        return true;
    } else {
        alert("ya existe el empleado con la cedula : " + empleado.cedula);
        return false;
    }
}
habili = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}
deshabili = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    //-------------validacion de la cedula------
    cedulaValidacion = false // debe ser false
    if (cedula.length != 10) {
        cedulaValidacion = true;
    }
    //----------validacion del el nombre ---------
    let mayusculaValidacion1 = 0;                 // debe ser true nombre
    for (let i = 0; i < nombre.length; i++) {
        let letra = nombre.charCodeAt(i)
        if (letra >= 65 && letra <= 90) {
            mayusculaValidacion1++;
        }
    }
    //------validacion del apeellido----------
    let mayusculaValidacion2 = 0;                 // debe ser true apellido
    for (let i = 0; i < apellido.length; i++) {
        let letra2 = apellido.charCodeAt(i)
        if (letra2 >= 65 && letra2 <= 90) {
            mayusculaValidacion2++;
        }
    }
    //---------validacion del sueldo----------
    let sueldoValidacion = false             // debe ser true sueldo 
    if (sueldo >= 400 && sueldo <= 5000) {
        sueldoValidacion = true;
    }
    // --------------Si hubo un erro ---------------------------------
    if (cedulaValidacion == true) {
        mostrarTexto("lblErrorCedula", "Error debe ingresar 10 digitos");
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    if (mayusculaValidacion1 != nombre.length || mayusculaValidacion1 == 0 || nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Error debe ingresar letras mayuscula y minimo 3 caracteres");
    } else {
        mostrarTexto("lblErrorNombre", "");

    }
    if (mayusculaValidacion2 != apellido.length || mayusculaValidacion2 == 0 || apellido.length < 3) {
        mostrarTexto("lblErrorApellido", "Error debe ingresar letras mayuscula y minimo 3 caracteres");
    } else {
        mostrarTexto("lblErrorApellido", "");
    }
    if (sueldoValidacion == false) {
        mostrarTexto("lblErrorSueldo", "Error debe ingresar digitos, sueldo entre 400 y 5000");
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    // ------------ si todo esta bien continuar cn el codigo     
    if (esNUevo == true && cedulaValidacion == false && mayusculaValidacion1 == nombre.length && nombre.length >= 3 && mayusculaValidacion2 == apellido.length && apellido.length >= 3 && sueldoValidacion == true) {
        let nuevo = {}
        nuevo.cedula = cedula;
        nuevo.nombre = nombre;
        nuevo.apellido = apellido;
        nuevo.sueldo = sueldo;
        let agregar = agregarEmpleado(nuevo);
        if (agregar == true) {
            mostrarEmpleado();
            alert("EMPLEADO SE GUARDO CORRECTAMENTE");
            habili();
            esNUevo = false

        }



    } else if (esNUevo == false && cedulaValidacion == false && mayusculaValidacion1 == nombre.length && nombre.length >= 3 && mayusculaValidacion2 == apellido.length && apellido.length >= 3 && sueldoValidacion == true) {

        let empleadoModificado = buscarEmpleado(cedula);
        empleadoModificado.nombre = nombre;
        empleadoModificado.apellido = apellido;
        empleadoModificado.sueldo = sueldo;
        alert("EMPLEADO MODIFICADO EXITOSAMENTE");
        mostrarEmpleado();
        deshabili();
    }



}
ejecutarBusqueda = function () {
    let busqueda = recuperarTexto("txtBusquedaCedula");
    let busquedaEncontrada = buscarEmpleado(busqueda);
    if (busquedaEncontrada == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", busquedaEncontrada.cedula);
        mostrarTextoEnCaja("txtNombre", busquedaEncontrada.nombre);
        mostrarTextoEnCaja("txtApellido", busquedaEncontrada.apellido);
        mostrarTextoEnCaja("txtSueldo", busquedaEncontrada.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
    }

}
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
}
buscarPorRol = function(){
    let cedulaEmple = recuperarTexto("txtBusquedaCedulaRol");
    let encontro = buscarEmpleado(cedulaEmple);
    if(encontro != null){
        mostrarTexto("infoCedula",encontro.cedula);
        mostrarTexto("infoNombre",encontro.nombre+encontro.apellido);
        mostrarTexto("infoSueldo",encontro.sueldo);
        
    }else{
        alert("No existe");
    }
}
calcularAporteEmpleado = function(recibir){
    let resultado;
    resultado = (recibir * 9.45) / 100;
    return resultado;
}
calcularValorAPagar = function(sueldo,iees,descuento){
    let calcularSueldo;
    calcularSueldo = sueldo-iees-descuento;
    return calcularSueldo;
}
calculcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarTexto("txtDescuentos");
    let aporte = calcularAporteEmpleado(sueldo);
    let pagar = calcularValorAPagar(sueldo,aporte,descuento);
    mostrarTexto("infoIESS",aporte);
    mostrarTexto("infoPago",pagar);
}