let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]
let  esNUevo = false;
mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
}
mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleado = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let tabla = "<table><tr>"+
    "<th>Cedula</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>"
    let elementosTabla;
    for(i = 0;i<empleados.length;i++){
        elementosTabla = empleados[i];
        tabla += 
        "<tr><td>"+ elementosTabla.cedula+"</td>"+
        "<td>"+ elementosTabla.nombre+"</td>"+
        "<td>"+ elementosTabla.apellido+"</td>"+
        "<td>"+ elementosTabla.sueldo+"</td>"+
        "</tr>"
    }
    tabla += "</table>"
    cmpTabla.innerHTML=tabla;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNUevo = true;
}
