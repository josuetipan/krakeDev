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
        alert("ya existe el clienete con la cedula : " + empleado.cedula);
        return false;
    }
}

guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    if (cedula.length == 10) {                              // longitud de la cedula
        let mayuscula;
        mostrarTexto("lblErrorCedula", "");
        mayuscula = nombre.charCodeAt();
        if (mayuscula >= 65 && mayuscula <= 90 && nombre.length >= 3) { // nombre letras mayusculas
            mostrarTexto("lblErrorNombre", "");
            let mayusculaApellido;
            mayusculaApellido = apellido.charCodeAt()
            if (mayusculaApellido >= 65 && mayusculaApellido <= 90) {// apellido letras mayusculas
                mostrarTexto("lblErrorApellido", "");
                if (sueldo >= 400 && sueldo <= 5000) {               // sueldo 
                    mostrarTexto("lblErrorSueldo", "");
                    if (esNUevo == true) {
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
                        }


                    }

                } else {
                    mostrarTexto("lblErrorSueldo", "Error debe ingresar digitos, sueldo entre 400 y 5000");
                }

            } else {
                mostrarTexto("lblErrorApellido", "Error debe ingresar letras mayuscula y minimo 3 caracteres");

            }

        } else {
            mostrarTexto("lblErrorNombre", "Error debe ingresar letras mayuscula y minimo 3 caracteres");

        }

    } else {
        mostrarTexto("lblErrorCedula", "Error debe ingresar 10 digitos");

    }

}
habili = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}